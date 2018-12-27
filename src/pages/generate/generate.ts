import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GenerateResultPage } from '../generate-result/generate-result';

@Component({
  selector: 'page-generate',
  templateUrl: 'generate.html'
})
export class GeneratePage {

  types: Array<string> = [
    'QR_CODE',
    'CODE_128',
    'CODE_39',
    'CODE_93',
    'CODABAR',
    'DATA_MATRIX',
    'UPC_E',
    'UPC_A',
    'EAN_8',
    'EAN_13',
    'ITF',
    'RSS14',
    'RSS_EXPANDED',
    'PDF_417',
    'AZTEC',
    'MSI'
  ];
  type: string = this.types[1];
  number: any;

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner) {

  }

  clickGenerate() {
    this.presentActionSheet();
  }

  presentActionSheet() {
    var buttons = []
    for (let index = 0; index < this.types.length; index++) {
      let button = {
        text: this.types[index],
        handler: () => {
          this.type = this.types[index];
          console.log("actionSheet clicked:",this.type);
          this.showPrompt();
        }
      }
      buttons.push(button);
    }
    buttons.push({
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    })

    const actionSheet = this.actionSheetCtrl.create({
      title: 'Choose one type of barcode to generate',
      buttons: buttons
    });
    actionSheet.present();
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Member Card Number',
      message: "Enter your member card number to generate",
      inputs: [
        {
          name: 'number',
          placeholder: 'member card number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            console.log('Confirm clicked:', data);
            this.number = data.number;
            this.generate(this.type, this.number);
          }
        }
      ]
    });
    prompt.present();
  }

  generate(type: string, data: any) {
    console.log("generate type:", type);
    console.log("generate data:", data);
    if (this.platform.is('cordova')) {
      this.barcodeScanner.encode(type, data).then((result: BarcodeEncodeResult) => {
        console.log("encode success:", JSON.stringify(result));
        this.navCtrl.push(GenerateResultPage, {
          data:this.number,
          type:this.type,
          format: result.format,
          file : result.file
        })
      }).catch(error => {
        console.error("encode error:", JSON.stringify(error));
      })
    } else {
      this.navCtrl.push(GenerateResultPage,{
        file:"https://camo.githubusercontent.com/8769db57412ce40d31706919d9de02d62de89800/687474703a2f2f6c696e64656c6c2e6d652f4a73426172636f64652f6f746865722f6c6f676f2e737667"
      });
    }
  }
}

export interface BarcodeEncodeResult {
  format: 'QR_CODE' | 'DATA_MATRIX' | 'UPC_E' | 'UPC_A' | 'EAN_8' | 'EAN_13' | 'CODE_128' | 'CODE_39' | 'CODE_93' | 'CODABAR' | 'ITF' | 'RSS14' | 'RSS_EXPANDED' | 'PDF_417' | 'AZTEC' | 'MSI';
  file: string;
}
