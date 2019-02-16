import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BirdPage } from './bird';

@NgModule({
  declarations: [
    BirdPage,
  ],
  imports: [
    IonicPageModule.forChild(BirdPage),
  ],
})
export class BirdPageModule {}
