import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'lib';
import { SocialUser } from 'lib';
import {FacebookLoginProvider} from 'lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;

  constructor(private readonly _authService: SocialAuthService) {}

  ngOnInit() {
    this._authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithGoogle(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this._authService.signOut();
  }

  refreshGoogleToken(): void {
    this._authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
