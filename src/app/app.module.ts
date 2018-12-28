import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ScanResultPage } from '../pages/scan-result/scan-result';
import { GeneratePage } from '../pages/generate/generate';
import { GenerateResultPage } from '../pages/generate-result/generate-result';
import { IonicPage } from '../pages/ionic/ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ScanResultPage,
    GeneratePage,
    GenerateResultPage,
    IonicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      iconMode: 'ios',
      pageTransition: 'ios-transition',
      swipeBackEnabled: true,
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    ScanResultPage,
    GeneratePage,
    GenerateResultPage,
    IonicPage
  ],
  providers: [
    WebView,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
