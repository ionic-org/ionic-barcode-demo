import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { GeneratePage } from '../pages/generate/generate';
import { IonicPage } from '../pages/ionic/ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    GeneratePage,
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
    GeneratePage,
    IonicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
