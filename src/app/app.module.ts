import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';



import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BirdPage } from '../pages/bird/bird';
import { BeePage } from '../pages/bee/bee';
import { MonsterPage } from '../pages/monster/monster';
import { WaterPage } from '../pages/water/water';


@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    HomePage,
    ListPage,
    BirdPage,
    BeePage,
    MonsterPage,
    WaterPage,
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    HomePage,
    ListPage,
    BirdPage,
    BeePage,
    MonsterPage,
    WaterPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
