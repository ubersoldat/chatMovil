import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../common/message';
import { MessageProvider } from '../../providers/message/message';
import { Camera, CameraOptions } from '@ionic-native/camera';

// se importaron estas 2 
import { AuthService } from '../../providers/auth-service';
import { SignInPage } from '../signin/signin';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild("content") content: any;

  // Arreglo "observable" con listado de mensajes
  messages: Observable<Message[]>;
  // Nuevo mensaje
  newMessage: string;
  base64Image: string;

  //se agrego el nombre de usuario
  userName: string = "";

  // se le agrego al constructor el public authService: AuthService
  constructor(public navCtrl: NavController, private _msgProvider: MessageProvider, private camera: Camera, public authService: AuthService, public navParams: NavParams) {
    this.messages = _msgProvider.fetchAll();
    this.userName=navParams.get('userName');
    
  }

  signOut() {
    this.authService.signOut();
    this.navCtrl.setRoot(SignInPage);
  }

  send() {
    if (!this.newMessage) return;

    this._msgProvider.add({
      // se agrego el userName
      author: this.userName,
      message: this.newMessage,
      date: new Date().toString()
    });
    
    this.newMessage = '';
    this.scrollToBottom();
  }

  scrollToBottom(){
    var contentEnd = document.getElementById("content-end").offsetTop;
    this.content.scrollTo(0, contentEnd, 300);
  }

  takePic() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.error('takePic error', err);
    });
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.error('takePic error', err);
    });
  }

}
