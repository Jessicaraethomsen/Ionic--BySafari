import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BirdPage } from '../bird/bird';
import { BeePage } from '../bee/bee';
import { MonsterPage } from '../monster/monster';
import { WaterPage } from '../water/water';
import { LoadingController } from 'ionic-angular'; 



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public birdPage = BirdPage;
	public beePage = BeePage;
	public monsterPage = MonsterPage;
	public waterPage = WaterPage;

  constructor(public navCtrl: NavController, public loadingCtr: LoadingController) {

  	let loader = this.loadingCtr.create({content: 'Loading Universe'});
  	loader.present();
  	loader.dismiss();


  }


	goBird(){
		this.navCtrl.setRoot(this.birdPage);
	}

	goBee(){
		this.navCtrl.setRoot(this.beePage);

	}

	goMonster(){
		this.navCtrl.setRoot(this.monsterPage);

	}

	goWater(){
		this.navCtrl.setRoot(this.waterPage);


	}
}
