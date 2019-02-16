import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonsterPage } from './monster';

@NgModule({
  declarations: [
    MonsterPage,
  ],
  imports: [
    IonicPageModule.forChild(MonsterPage),
  ],
})
export class MonsterPageModule {}
