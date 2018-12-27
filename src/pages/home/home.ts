import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { ScanResultPage } from '../scan-result/scan-result';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private platform:Platform,
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner) {

  }

  clickScan() {
    if (this.platform.is('cordova')) {
      this.scan();
    } else {
      this.navCtrl.push(ScanResultPage);
    }
  }

  scan(options?: BarcodeScannerOptions) {
    this.barcodeScanner.scan(options).then((result: BarcodeScanResult) => {
      if (result.cancelled) {
        console.log("cancelled");
      } else {
        console.log("scan success:",JSON.stringify(result));
        this.navCtrl.push(ScanResultPage, {
          format: result.format,
          text: result.text
        })
      }
    }).catch(error => {
      console.error(JSON.stringify(error));
    })
  }

}
