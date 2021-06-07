import { Scene } from '@babylonjs/core/scene';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { DynamicTexture } from '@babylonjs/core/Materials/Textures/dynamicTexture';

const fontSize = 48;
const fontFamily = "Segoe UI";

export const fontColor = "#000000";
export const clearColor = "transparent";
export const font = `${fontSize}px ${fontFamily}`

export const glossyPlastic = {
  metallic: 0.0,
  roughness: 0.15
};

export const glossyMetallic = {
  metallic: 0.75,
  roughness: 0.3
};

export const getRoughPlasticMaterial = (scene: Scene): PBRMaterial => {
  const plastic = new PBRMaterial("plastic", scene);
  plastic.alpha = 1.0;
  plastic.metallic = 0.0;
  plastic.roughness = 0.4;
  plastic.indexOfRefraction = 1.5;
  plastic.reflectivityColor = Color3.White();
  plastic.backFaceCulling = false;
  plastic.environmentIntensity = 0;

  return plastic;
}

export const getGlossyPlasticMaterial = (scene: Scene): PBRMaterial => {
  const plastic = new PBRMaterial("glossyPlastic", scene);
  plastic.alpha = 1.0;
  plastic.metallic = glossyPlastic.metallic;
  plastic.roughness = glossyPlastic.roughness;
  plastic.indexOfRefraction = 1.5;
  plastic.reflectivityColor = Color3.White();
  plastic.backFaceCulling = false;
  plastic.environmentIntensity = 0;

  //plastic.anisotropy.isEnabled = true;
  //plastic.anisotropy.texture = CubeTexture.CreateFromPrefilteredData("../assets/textures/environment.env", scene);

  return plastic;
}

export const getGlassMaterial = (scene: Scene): PBRMaterial => {
  const glass = new PBRMaterial("glass", scene);
   glass.reflectionTexture = CubeTexture.CreateFromPrefilteredData("../assets/textures/environment.env", scene);
  // glass.cameraExposure = 0.66;
 //  glass.cameraContrast = 1.66;
  glass.indexOfRefraction = 0.52;
  glass.alpha = 0.5;
  glass.directIntensity = 0.0;
  glass.environmentIntensity = 0;
  glass.microSurface = 1;
  glass.reflectivityColor = new Color3(0.2, 0.2, 0.2);
  glass.albedoColor = new Color3(0.95, 0.95, 0.95);
  glass.backFaceCulling = false;

  return glass;
}

export const getTextMaterial = (scene: Scene): PBRMaterial => {
  const baseMaterial = new PBRMaterial("engravingText", scene);
  const dynamicTexture = new DynamicTexture("DynamicTexture", { width: 750, height: 96 }, scene, false);
  dynamicTexture.drawText("", null, null, font, fontColor, clearColor, true);

  baseMaterial.albedoColor = Color3.Black();
  baseMaterial.albedoTexture = dynamicTexture;
  baseMaterial.albedoTexture.hasAlpha = true;
  baseMaterial.metallic = 1.0;
  baseMaterial.roughness = 0.4;

  return baseMaterial;
}