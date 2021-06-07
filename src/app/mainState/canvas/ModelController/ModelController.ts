import '@babylonjs/core/Layers/effectLayerSceneComponent';
import { Scene } from '@babylonjs/core/scene';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Animation } from '@babylonjs/core/Animations/animation';
import { DynamicTexture } from '@babylonjs/core/Materials/Textures/dynamicTexture';
import { SceneLoader } from '@babylonjs/core/Loading';
import { SurfaceColor, ABXYColor, ViewMenuColor, MenuOption } from '../../../constants/types';
import {
  OPTION_BODY,
  OPTION_BACK,
  OPTION_BUMPERS,
  OPTION_TRIGGERS,
  OPTION_DPAD,
  OPTION_THUMBSTICKS,
  OPTION_ABXY,
  OPTION_ABXY_BASE,
  OPTION_ABXY_A,
  OPTION_ABXY_B,
  OPTION_ABXY_X,
  OPTION_ABXY_Y,
  OPTION_ABXY_TOP,
  OPTION_VIEWMENU,
  OPTION_VIEWMENU_BASE,
  OPTION_VIEWMENU_ICONS
} from '../../../constants/customizations';
import { MainState } from '../../../mainState/state';
import { getGlassMaterial, getRoughPlasticMaterial, getGlossyPlasticMaterial, getTextMaterial, font, fontColor, clearColor, glossyPlastic, glossyMetallic } from "./materials";

export class ModelController {
  private scene: Scene;
  private engravingText: DynamicTexture;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  public loadModel = (): Promise<void> => new Promise((resolve, reject) => {
    SceneLoader.AppendAsync('../assets/models/', 'controller.glb', this.scene).then(() => {
      resolve();
    }).catch(e => {
      console.log(e);
      reject();
    });
  }); 
 
  public setupModel = (state: MainState): void => {
    this.setupMaterials(state);
    this.setupEngravingText();
  };

  public setupMaterial = (meshId: string, material: PBRMaterial, initialColor?: string): void => {
    const mesh = this.scene.getMeshByID(meshId) as Mesh;
    if(initialColor){
      material.albedoColor = Color3.FromHexString(initialColor);
    }
    mesh.material = material;
  }

  public setupMaterials = (state: MainState): void => {
    this.setupMaterial(OPTION_BODY, getRoughPlasticMaterial(this.scene), state[OPTION_BODY].color.value);
    this.setupMaterial(OPTION_BACK, getRoughPlasticMaterial(this.scene), state[OPTION_BACK].color.value);
    this.setupMaterial(OPTION_ABXY_BASE, getRoughPlasticMaterial(this.scene), state[OPTION_ABXY].color.background);
    this.setupMaterial(OPTION_ABXY_A, getRoughPlasticMaterial(this.scene), state[OPTION_ABXY].color.a);
    this.setupMaterial(OPTION_ABXY_B, getRoughPlasticMaterial(this.scene), state[OPTION_ABXY].color.b);
    this.setupMaterial(OPTION_ABXY_X, getRoughPlasticMaterial(this.scene), state[OPTION_ABXY].color.x);
    this.setupMaterial(OPTION_ABXY_Y, getRoughPlasticMaterial(this.scene), state[OPTION_ABXY].color.y);
    this.setupMaterial(OPTION_THUMBSTICKS, getRoughPlasticMaterial(this.scene), state[OPTION_THUMBSTICKS].color.value);
    this.setupMaterial(OPTION_BUMPERS, getGlossyPlasticMaterial(this.scene), state[OPTION_BUMPERS].color.value);
    this.setupMaterial(OPTION_TRIGGERS, getGlossyPlasticMaterial(this.scene), state[OPTION_TRIGGERS].color.value);
    this.setupMaterial(OPTION_DPAD, getGlossyPlasticMaterial(this.scene), state[OPTION_DPAD].color.value);
    this.setupMaterial(OPTION_VIEWMENU_BASE, getGlossyPlasticMaterial(this.scene), state[OPTION_VIEWMENU].color.background);
    this.setupMaterial(OPTION_VIEWMENU_ICONS, getGlossyPlasticMaterial(this.scene), state[OPTION_VIEWMENU].color.icon);
    this.setupMaterial(OPTION_ABXY_TOP, getGlassMaterial(this.scene));
  }

  public animateMaterialProperty = <T>(mesh: Mesh, propertyName: keyof PBRMaterial, value: T, animationType: 0 | 4): Animation => {
    const startColor = (mesh.material as PBRMaterial)[propertyName];
    const keys = [
      { frame: 0, value: startColor },
      { frame: 30, value }
    ];
    const anim = new Animation(`${mesh.name}.${propertyName}`, `material.${propertyName}`, 30, animationType);
    anim.setKeys(keys);
    return anim;
  };

  public animateMeshColor = (option: string, hexColor: string): void => {
    const mesh = this.scene.getMeshByID(option) as Mesh;
    const anim = this.animateMaterialProperty(mesh, "albedoColor",  Color3.FromHexString(hexColor), Animation.ANIMATIONTYPE_COLOR3);
    mesh.animations = [anim];
    this.scene.beginAnimation(mesh, 0, 30, false, 2);
  };

  public animateMeshMetallic = (option: string, isMetalic: boolean, hexColor: string): void => {
    const mesh = this.scene.getMeshByID(option) as Mesh;
    const { metallic, roughness } = isMetalic ? glossyMetallic : glossyPlastic;
    const animMetallic = this.animateMaterialProperty(mesh, "metallic", metallic, Animation.ANIMATIONTYPE_FLOAT);
    const animRoughness = this.animateMaterialProperty(mesh, "roughness", roughness, Animation.ANIMATIONTYPE_FLOAT);
    const animColor = this.animateMaterialProperty(mesh, "albedoColor",  Color3.FromHexString(hexColor), Animation.ANIMATIONTYPE_COLOR3);
    mesh.animations = [animColor, animMetallic, animRoughness];
    this.scene.beginAnimation(mesh, 0, 30, false, 2);
  };

  public animateSurfaceColor = (option: MenuOption, color: SurfaceColor): void => {
    this.animateMeshColor(option, color.value);
  };

  public animateABXYColor = (color: ABXYColor): void => {
    this.animateMeshColor(OPTION_ABXY_BASE, color.background);
    this.animateMeshColor(OPTION_ABXY_A, color.a);
    this.animateMeshColor(OPTION_ABXY_B, color.b);
    this.animateMeshColor(OPTION_ABXY_X, color.x);
    this.animateMeshColor(OPTION_ABXY_Y, color.y);
  };

  public animateViewMenuColor = (color: ViewMenuColor): void => {
    this.animateMeshColor(OPTION_VIEWMENU_BASE, color.background);
    this.animateMeshColor(OPTION_VIEWMENU_ICONS, color.icon);
  };

  public setupEngravingText = ():void => {
    const textMaterial = getTextMaterial(this.scene);
    const textureSize = textMaterial.albedoTexture.getBaseSize();
    const planeHeight = 0.5;
    const ratio = planeHeight / textureSize.height;
    const planeWidth = textureSize.width * ratio;

    const plane = MeshBuilder.CreatePlane("engravingText", { width: planeWidth, height: planeHeight }, this.scene);
    plane.material = textMaterial;
    plane.position.y = -1.73;
    plane.position.z = -1.82;

    this.engravingText = textMaterial.albedoTexture as DynamicTexture;
  }

  public setEngravingText = (text: string):void => {
    const { width, height } = this.engravingText.getBaseSize();
    this.engravingText.getContext().clearRect(0, 0, width, height);
    this.engravingText.drawText(text, null, null, font, fontColor, clearColor, true);
  }
}
