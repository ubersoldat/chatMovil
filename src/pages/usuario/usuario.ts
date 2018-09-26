import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  // nombre de usuario
  userName: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nombreUsuario():void{
    this.navCtrl.push(HomePage,{userName:this.userName});
    //this.navCtrl.setRoot(UsuarioPage);

  }

}
