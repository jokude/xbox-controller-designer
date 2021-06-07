import "@babylonjs/inspector";
import '@babylonjs/loaders/glTF';
import '@babylonjs/core/Meshes/meshBuilder';
import '@babylonjs/core/Loading/loadingScreen';
import '@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent';
import "@babylonjs/core/Debug/debugLayer";

import { ScreenSpaceCurvaturePostProcess } from '@babylonjs/core/PostProcesses/screenSpaceCurvaturePostProcess';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline';
import { Color4, Color3 } from '@babylonjs/core/Maths/math.color';
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';

import { ModelController } from '../ModelController/ModelController';
import { initialState } from '../../state';

export class SceneController {
  
  protected canvas: HTMLCanvasElement;
  protected engine: Engine;
  protected scene: Scene;
  protected modelController: ModelController;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  public baseSetup = async (): Promise<void> => {

    this.createEngine();
    this.createScene(this.engine);
    await this.createModel(this.scene);

    this.scene.debugLayer.show({
      overlay: true
    }); 
  };

  public resize = (): void => this.engine.resize();

  protected createEngine = (): void => {
    this.engine = new Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true });
    this.engine.setHardwareScalingLevel(0.5) 
  };

  protected createScene = (engine: Engine): void => {
    this.scene = new Scene(engine);
    this.scene.clearColor = Color4.FromColor3(Color3.FromHexString('#f1f1f1').toLinearSpace());
  };

  protected createModel = async (scene: Scene): Promise<void> => {
    this.modelController = new ModelController(scene);
    await this.modelController.loadModel();
    this.modelController.setupModel(initialState);
  };

  protected setScreenSpace = (): void => {
    const screenSpace = new ScreenSpaceCurvaturePostProcess("", this.scene, 1, this.scene.activeCamera);
    screenSpace.ridge = 0.8;
    screenSpace.valley = 1;
    //screenSpace.dispose();
  }

  protected setRenderingPipeline = (): void => {
    const defaultPipeline = new DefaultRenderingPipeline(
      "DefaultRenderingPipeline",
      true, 
      this.scene,
      this.scene.cameras
    );
    if (defaultPipeline.isSupported) {
      defaultPipeline.fxaaEnabled = true;
      defaultPipeline.samples = 4;
    }
  }
}
