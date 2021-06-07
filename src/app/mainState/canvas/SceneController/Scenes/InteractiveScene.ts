import "@babylonjs/inspector";
import '@babylonjs/loaders/glTF';
import '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Loading/loadingScreen';
import '@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent';
import "@babylonjs/core/Debug/debugLayer";
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { CameraController } from '../../CameraController';
//import { CustomLoadingScreen } from '../../LoadingScreen';
import {
  OPTION_BODY,
  OPTION_BACK,
  OPTION_BUMPERS,
  OPTION_DPAD,
  OPTION_THUMBSTICKS,
  OPTION_TRIGGERS,
  OPTION_ABXY,
  OPTION_VIEWMENU,
  OPTION_ENGRAVING
} from '../../../../constants/customizations';
import { MainState } from '../../../../mainState/state';
import { SceneController } from "../Scene";

export class InteractiveSceneController extends SceneController {

  protected cameraController: CameraController;

  public init = async (): Promise<void> => {
    await this.baseSetup();
    this.setupScene(this.canvas);

   // const loadingScreen = new CustomLoadingScreen("I'm loading!!");
   // this.engine.loadingScreen = loadingScreen;
    this.engine.runRenderLoop(() => {
      if (this.scene.activeCamera) {
        this.scene.render();
      }
    });
  };

  public updateState = (option: keyof MainState, state?: MainState): void => {
    this.cameraController.moveTo(option);
    if(state){
      switch (option) {
        case OPTION_BODY:
        case OPTION_BACK:
        case OPTION_THUMBSTICKS:
          this.modelController.animateSurfaceColor(option, state[option].color);
          break;
        case OPTION_BUMPERS:
        case OPTION_DPAD:
        case OPTION_TRIGGERS:
          this.modelController.animateMeshMetallic(option, state[option].metallic, state[option].color.value);
          break;
       case OPTION_ABXY:
          this.modelController.animateABXYColor(state[option].color);
          break;
        case OPTION_VIEWMENU:
          this.modelController.animateViewMenuColor(state[option].color);
          break;
        case OPTION_ENGRAVING:
          this.modelController.setEngravingText(state[option].text);
          break;
        default:
          break;
      }
    }
  };

  protected setupScene = (canvas: HTMLCanvasElement): void => {

    this.cameraController = new CameraController(canvas, this.scene);

    this.setRenderingPipeline();
    this.setScreenSpace();

    const globalLight = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene);
    globalLight.groundColor = Color3.Black();
    globalLight.intensity = 1.0;

    const directionalLight = new DirectionalLight('directional', new Vector3(0, 0, 0), this.scene);
    directionalLight.intensity = 1.0;

    this.scene.registerBeforeRender(() => {
      directionalLight.setDirectionToTarget(this.cameraController.camera.position.negate());
    });
  };
}
