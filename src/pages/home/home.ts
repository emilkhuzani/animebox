import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private adMobFree : AdMobFree ) {

  }

  async showIklan(){
  	const interstitialConfig : AdMobFreeInterstitialConfig = {
  	  id : 'ca-app-pub-5260351036384070/2134321286',
  	  isTesting : true,
  	  autoShow : true,
    };
    this.adMobFree.interstitial.config(interstitialConfig);
    try{
      const result = await this.adMobFree.interstitial.prepare();
      alert(result);
      
    }catch(e){
      alert(e);
    }
  }
  

  


}
