import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-ionic',
  templateUrl: 'ionic.html'
})
export class IonicPage {

  src:string;

  constructor(
    public navCtrl: NavController,
    private camera: Camera
    ) {

  }

  clickTakePicture() {
    let option: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(option).then(result=>{
      console.log("getPicture success:", result);
      this.src = result;
    }).catch(error=>{
      console.error("getPicture error:",error);
    })
  }

}
