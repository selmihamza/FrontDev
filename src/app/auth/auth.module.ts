import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxLoginComponent } from "./login/login.component";
import { NgxAuthRoutingModule } from "./auth-routing.module";
import { NbAuthModule } from "@nebular/auth";
//import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbIconModule
} from "@nebular/theme";
import { NgxRegisterComponent } from "./register/register.component";
import { NgxResetPasswordComponent } from "./reset-password/reset-password.component";
import { NgxRequestPasswordComponent } from "./request-password/request-password.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbIconModule,
    NbAuthModule
    // InternationalPhoneNumberModule,
  ],
  declarations: [
    // ... here goes our new components
    NgxLoginComponent,
    NgxRegisterComponent,
    NgxResetPasswordComponent,
    NgxRequestPasswordComponent
  ]
})
export class NgxAuthModule {}
