import { Component, Inject, OnInit } from "@angular/core";
import {
  NbLogoutComponent,
  NbAuthService,
  NbTokenService,
  NB_AUTH_OPTIONS
} from "@nebular/auth";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-logout",
  templateUrl: "./logout.component.html"
})
export class LogoutComponent extends NbLogoutComponent implements OnInit {}
