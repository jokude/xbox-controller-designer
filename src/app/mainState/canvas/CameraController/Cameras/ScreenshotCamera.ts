/*import { Scene } from '@babylonjs/core/scene';
import { Animation } from '@babylonjs/core/Animations/animation';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { ScreenshotTools } from '@babylonjs/core/Misc/screenshotTools';

export class CameraController {
  private scene: Scene;
  public camera: ArcRotateCamera;

  constructor(scene: Scene) {
    this.scene = scene;
    this.init();
  }

  init = (): void => {
    this.camera = new ArcRotateCamera('mainCamera', 0, 0, 0, new Vector3(0, 0, -20), this.scene);
  };

  takeScreenshot = (scene: Scene): void => {
    ScreenshotTools.CreateScreenshot(this.scene.getEngine(), this.camera, { width: 1920, height: 1080 }, (data) => {

    }
  }
}
*/