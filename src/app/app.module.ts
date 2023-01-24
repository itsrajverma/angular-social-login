import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {
  GoogleLoginProvider,
  SocialLoginModule,
  FacebookLoginProvider,
  SocialAuthServiceConfig,
} from 'lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '718448889079-lu16fk8egb6j5inrunbr0h82j6mdfj3d.apps.googleusercontent.com',
              { oneTapEnabled : false }
            ),
          }
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
