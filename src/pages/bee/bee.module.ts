import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeePage } from './bee';

@NgModule({
  declarations: [
    BeePage,
  ],
  imports: [
    IonicPageModule.forChild(BeePage),
  ],
})
export class BeePageModule {}
