import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any = {};
  constructor(private fb : Facebook, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginFacebook(){
    this.fb.login(['public_profile','email']).then((res:FacebookLoginResponse) => {
      this.cekFacebook();
    }).catch(e=>alert(e));
  }

  cekFacebook(){
    this.fb.api("/me?fields=id,name,email",['public_profile','email']).then(res=>{
      this.user.id=res.id;
      this.user.name=res.name;
      alert(this.user.name);
    }).catch(e=>{
      alert(e);
    });
  }

}


