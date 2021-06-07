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
import { ScreenshotTools } from '@babylonjs/core/Misc/screenshotTools';
import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { GroundBuilder } from '@babylonjs/core/Meshes/Builders/groundBuilder';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Quaternion } from '@babylonjs/core/Maths/math.vector';

import { SceneController } from "../Scene";

export class ExhibitionSceneController extends SceneController {

  protected camera: FreeCamera;

  public init = async (): Promise<void> => {

    await this.baseSetup();
    this.setupScene(this.canvas);

    this.engine.runRenderLoop(() => {
      if (this.scene.activeCamera) {
        this.scene.render();
      }
    });
  };

  public getMainScreenshot = (): Promise<string> => {

    return ScreenshotTools.CreateScreenshotUsingRenderTargetAsync(this.engine, this.camera, { width: 2400, height: 1764, mimeType: "image/png", samples: 1, antialiasing: true });
  };

  protected setupScene = (canvas: HTMLCanvasElement): void => {

    this.camera = new FreeCamera('screenshotCamera', new Vector3(0, 0, -20), this.scene);
    this.camera.position = new Vector3(-7, -4, -22);
    //this.camera.rotationQuaternion = Quaternion.FromEulerAngles(-0.2423564, 0.1958434, -0.3839724);
   // this.camera.rotationQuaternion = Quaternion.FromEulerAngles(-0.0949978, 0.1423877, -21.5156834);


    this.camera.setTarget(Vector3.Zero());
    this.camera.attachControl(canvas, true);

    const groundMaterial = new StandardMaterial("myMaterial", this.scene);
    groundMaterial.diffuseColor = Color3.Purple();
    const ground = GroundBuilder.CreateGround("ground", { width: 20, height: 20 }, this.scene);
    ground.material = groundMaterial;
    ground.rotationQuaternion = Quaternion.FromEulerAngles(-1.5707963, 0, 0);

    this.setRenderingPipeline();
    this.setScreenSpace();

    const globalLight = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene);
    globalLight.groundColor = Color3.Black();
    globalLight.intensity = 1.0;

    const directionalLight = new DirectionalLight('directional', new Vector3(0, 0, 0), this.scene);
    directionalLight.intensity = 1.0;
  };
}
