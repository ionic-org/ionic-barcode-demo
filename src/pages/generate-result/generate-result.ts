import { Component } from '@angular/core';
import { NavController, NavParams, normalizeURL} from 'ionic-angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'page-generate-result',
  templateUrl: 'generate-result.html',
})
export class GenerateResultPage {

  data:any;
  type:string;
  format:string;
  file:string;
  private win: any = window;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private webview: WebView) {
  }

  ionViewDidLoad() {
    this.data = this.navParams.get('data');
    this.type = this.navParams.get('type');
    this.format = this.navParams.get('format');
    this.file = this.navParams.get('file');

    console.log("ionViewDidLoad data:", this.data);
    console.log("ionViewDidLoad type:", this.type);
    console.log("ionViewDidLoad format:", this.format);
    console.log("ionViewDidLoad file:", this.file);
    // this.file = normalizeURL(this.file);
    // console.log("normalizeURL:", this.file);
    try {

      this.file = this.win.Ionic.WebView.convertFileSrc(this.file);
      // this.file = this.webview.convertFileSrc();
      console.log("convertFileSrc:", this.file);
    } catch (error) {
      console.error("convertFileSrc error:", error);
    }

  }

}
