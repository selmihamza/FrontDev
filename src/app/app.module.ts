/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
//import { AuthGuard } from './auth-guard.service';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule
} from "@nebular/theme";
//import { MatCardModule, MatInputModule } from '@angular/material';
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken,
  NbTokenStorage,
  NbTokenLocalStorage
} from "@nebular/auth";

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true
  },
  strategy: "username" // strategy id key.
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    //MatCardModule,
    ThemeModule.forRoot(),
    //MatCardModule,
    //MatInputModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY"
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email",
          token: {
            class: NbAuthJWTToken,

            key: "token" // this parameter tells where to look for the token
          },
          baseEndpoint: "http://localhost:8080",
          login: {
            endpoint: "/auth",
            defaultErrors: [
              "Username/Password combination is not correct, please try again."
            ],
            defaultMessages: ["You have been successfully logged in."]
          },
          register: {
            endpoint: "/auth/sign-up"
          },
          logout: {
            endpoint: "/auth/sign-out"
          },
          requestPass: {
            endpoint: "/auth/request-pass",
            method: "post",
            requireValidToken: false
          },
          resetPass: {
            endpoint: "/auth/reset-pass",
            method: "post",
            resetPasswordTokenKey: "reset_password_token",
            requireValidToken: false
          }
        })
      ],

      forms: {
        login: {
          formSetting,
          redirect: {
            success: "/pages/",
            failure: null // stay on the same page
          }
        },
        register: {
          formSetting,
          redirect: {
            success: "/pages/",
            failure: null // stay on the same page
          }
        },
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0
        },
        validation: {
          password: {
            required: true,
            minLength: 4,
            maxLength: 50
          },
          email: {
            required: true
          },
          username: {
            required: true,
            minLength: 4,
            maxLength: 50
          },
          firstName: {
            required: true,
            minLength: 2,
            maxLength: 50
          },
          lastName: {
            required: true,
            minLength: 2,
            maxLength: 50
          }
        }
      }
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    // ...
    // AuthGuard,
    { provide: NbTokenStorage, useClass: NbTokenLocalStorage }
  ]
})
export class AppModule {}
