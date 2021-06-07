import { Scene } from '@babylonjs/core/scene';
import { Animation } from '@babylonjs/core/Animations/animation';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { MenuOption } from '../../../constants/types';
import {
  OPTION_BODY,
  OPTION_DPAD,
  OPTION_THUMBSTICKS,
  OPTION_BACK,
  OPTION_TRIGGERS,
  OPTION_BUMPERS,
  OPTION_ABXY,
  OPTION_ENGRAVING,
  OPTION_VIEWMENU
} from '../../../constants/customizations';

const HALF_PI = Math.PI * 0.5;
const ONE_HALF_PI = Math.PI * 1.5;

export class CameraController {
  private canvas: HTMLCanvasElement;
  private scene: Scene;
  private radiusAnim: Animation;
  private alphaAnim: Animation;
  private betaAnim: Animation;

  public camera: ArcRotateCamera;

  constructor(canvas: HTMLCanvasElement, scene: Scene) {
    this.scene = scene;
    this.canvas = canvas;

    this.init();
  }

  init = (): void => {
    this.camera = new ArcRotateCamera('mainCamera', 0, 0, 0, new Vector3(0, 0, -20), this.scene);
    this.camera.attachControl(this.canvas, true, false);
    this.camera.setTarget(Vector3.Zero());
    this.camera.lowerRadiusLimit = 18;
    this.camera.upperRadiusLimit = 18;
    this.camera.radius = 18;

    this.radiusAnim = new Animation("camRadius", "radius", 30, Animation.ANIMATIONTYPE_FLOAT);
    this.alphaAnim = new Animation("camAlpha", 'alpha', 30, Animation.ANIMATIONTYPE_FLOAT);
    this.betaAnim = new Animation("camBeta", 'beta', 30, Animation.ANIMATIONTYPE_FLOAT);
  };

  moveTo = (option: MenuOption): void => {

    const rotation = this.getOptionRotation(option);
    const { beta } = rotation;
    let { alpha } = rotation;

    this.resetCam('alpha');
    this.resetCam('beta');

    const diff = this.camera.alpha - alpha;
    if (Math.abs(diff) > Math.PI) {
      alpha = alpha + Math.sign(diff) * (Math.PI * 2);
    }
  
    const alphaKeys = [
      { frame: 0, value: this.camera.alpha },
      { frame: 30, value: alpha }
    ];
    const betaKeys = [
      { frame: 0, value: this.camera.beta },
      { frame: 30, value: beta }
    ];
    this.radiusAnim.setKeys([]);
    this.alphaAnim.setKeys(alphaKeys);
    this.betaAnim.setKeys(betaKeys);

    this.camera.animations = [this.alphaAnim, this.betaAnim];
    this.scene.beginAnimation(this.camera, 0, 30, false, 3);
  }

  resetCam = (param: 'alpha' | 'beta'): void => {
    this.camera[param] = this.camera[param] % (Math.PI * 2);
    if (this.camera[param] < 0) {
      this.camera[param] += Math.PI * 2;
    }
  }

  getOptionRotation = (option: MenuOption): Pick<ArcRotateCamera, 'alpha' | 'beta'> => {
    switch (option) {
      case OPTION_BODY:
      case OPTION_DPAD:
      case OPTION_THUMBSTICKS:
      case OPTION_ABXY:
      case OPTION_ENGRAVING:
      case OPTION_VIEWMENU:
        return {
          alpha: ONE_HALF_PI,
          beta: HALF_PI
        };
      case OPTION_BACK:
        return {
          alpha: HALF_PI,
          beta: HALF_PI
        };
      case OPTION_TRIGGERS:
      case OPTION_BUMPERS:
        return {
          alpha: HALF_PI,
          beta: 0
        };
      default:
        return {
          alpha: ONE_HALF_PI,
          beta: HALF_PI
        };
    }
  };
}
