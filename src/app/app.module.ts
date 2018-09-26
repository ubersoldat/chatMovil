import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

// Nota: (1) Importa módulos de firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Nota (2) Credenciales y configuración inicial de firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCWKjXV4K1KHi3Kc3gd0lmPMrdNzEESv6c",
    authDomain: "test-firebase-55281.firebaseapp.com",
    databaseURL: "https://test-firebase-55281.firebaseio.com",
    projectId: "test-firebase-55281",
    storageBucket: "test-firebase-55281.appspot.com",
    messagingSenderId: "523776551929"
};

// Importa páginas (custom elements)
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessageProvider } from '../providers/message/message';

// estas se agregaron para el inicio de sesion

import { SignInPage } from '../pages/signin/signin';
import { SignUpPage } from '../pages/signup/signup';

// estas se agregaron para el inicio de sesion

import { AuthService } from '../providers/auth-service';

// estas se agregaron para el inicio de sesion

import { UsuarioPage } from '../pages/usuario/usuario';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // estas se agregaron para el inicio de sesion
    SignInPage,
    SignUpPage,
    //se agreggo lo que viene
    UsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Nota (3) Importa módulos
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // estas se agregaron para el inicio de sesion
    SignInPage,
    SignUpPage,
    // estas se agregaron para el inicio de sesion
    UsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Nota (4) Importa provider firebase database
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // se agrego AuthService
    AuthService,
    MessageProvider,
    Camera
  ]
})
export class AppModule { }
