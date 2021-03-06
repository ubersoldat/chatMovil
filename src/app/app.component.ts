import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// cambiaremos la pagina de nicio de sesion, por lo tanto al entrar en la aplicacion se ira al Singin,
// por lo tanto comentamos el HomePage

//import { HomePage } from '../pages/home/home';

import { SignInPage } from '../pages/signin/signin';

// se le agregaron estas vistas para entrar si ya esta autentificado

//import { AuthService } from '../providers/auth-service';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SignInPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          statusBar.styleDefault();
          splashScreen.hide();
      });
  }
}

