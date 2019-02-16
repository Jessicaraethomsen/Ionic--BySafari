import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the BirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bird',
  templateUrl: 'bird.html',
})
export class BirdPage {
	homePage = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goHome(){
  	this.navCtrl.setRoot(this.homePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BirdPage');
  }

}
