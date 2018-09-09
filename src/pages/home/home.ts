import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SignupPage } from '../signup/signup';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public email: string = "";
  public password: string = "";
  public error: string = "";
  public notic: string = "";
  public data: Observable<any>;

  constructor(public navCtrl: NavController,
    public http: HttpClient, private storage : Storage) {

  }

  login() {
    let frmData = new FormData();
    frmData.append('email', this.email);
    frmData.append('password', this.password);
    /*this.data = this.http.post('http://localhost/ionic_api/api_signin.php', frmData);
    this.data.subscribe(resp => {
      this.notic = resp.message;
    }, error => this.error = error);
    */
    //this.navCtrl.setRoot(Homepate);

    this.storage.set('name', 'Max');

    // Or to get a key/value pair
    this.storage.get('name').then((val) => {
      console.log('Your age is', val);
    });
    
  }

  gotoSignup() {
    this.navCtrl.push(SignupPage);
  }

}
