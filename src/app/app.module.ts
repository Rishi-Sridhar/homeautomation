import { Home2Page } from './../pages/home2/home2';
import { TabsPage } from './../pages/tabs/tabs';
import { BtaddressPage } from './../pages/btaddress/btaddress';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OptionsPage } from '../pages/options/options';
import {SpeechRecognition} from '@ionic-native/speech-recognition';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OptionsPage,
    BtaddressPage,
    TabsPage,
    Home2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OptionsPage,
    BtaddressPage,
    TabsPage,
    Home2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    Diagnostic,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
