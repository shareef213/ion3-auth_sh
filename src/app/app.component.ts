import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage : Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkLogin();
    });
  }

  async checkLogin()
  {
    let data = await this.storage.get("name");
    if(data)
      {
        this.rootPage = HomePage;
      }else{
        this.rootPage = HomePage;
      }
  }
 /*checkLogin()
  {
    this.storage.get('name').then((data) => {
      if(data)
      {
        this.navCtrl.setRoot(HomePage);
      }else{
        this.navCtrl.setRoot(HomePage);
      }
    });
  }*/
}

