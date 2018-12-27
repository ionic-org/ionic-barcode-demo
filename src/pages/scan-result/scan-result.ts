import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-scan-result',
  templateUrl: 'scan-result.html',
})
export class ScanResultPage {

  format:string;
  text:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.format = this.navParams.get('format');
    console.log("ionViewDidLoad format:",this.format);
    this.text = this.navParams.get('text');
    console.log("ionViewDidLoad text:", this.text);

    this.format = "CODE_128";
    this.text = "341003930455561";
  }

}
