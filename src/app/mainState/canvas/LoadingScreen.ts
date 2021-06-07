import { ILoadingScreen } from '@babylonjs/core/Loading';

export class CustomLoadingScreen implements ILoadingScreen {

  public loadingUIBackgroundColor: string
  constructor(public loadingUIText: string) {}

  public displayLoadingUI: () => void = () => {
    //console.log(this.loadingUIText);
  }

  public hideLoadingUI: () => void = () => {
    //console.log("Loaded!");
  }
}