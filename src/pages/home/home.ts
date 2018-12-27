import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { ScanResultPage } from '../scan-result/scan-result';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner) {

  }

  clickScan() {
    let options: BarcodeScannerOptions = {

    };
    this.scan(options);
  }

  scan(options?: BarcodeScannerOptions) {
    this.barcodeScanner.scan(options).then((result: BarcodeScanResult) => {
      if (!result.cancelled) {
        console.log("cancelled");
      } else {
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
