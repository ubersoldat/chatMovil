import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { User} from 'firebase/app'; 

import { UserModel } from '../models/user-model';

@Injectable()
export class AuthService {
    user: User;

    constructor(public angularFireAuth: AngularFireAuth) {
        angularFireAuth.authState.subscribe((user: User) => {
            this.user = user;
        });
    }

    get authenticated(): boolean {
        return this.user != null;
    }

    signInWithEmailAndPassword(userModel: UserModel): Promise<any> {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(userModel.email, userModel.password);
    }

    createUserWithEmailAndPassword(userModel: UserModel): Promise<any> {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(userModel.email, userModel.password);
    }

    signOut(): Promise<any> {
        return this.angularFireAuth.auth.signOut();
    }
}