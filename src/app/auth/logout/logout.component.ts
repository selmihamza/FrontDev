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
export class LogoutComponent extends NbLogoutComponent implements OnInit {
  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected router: Router,
    protected tokenService: NbTokenService
  ) {
    super(service, options, router);
    console.log("logout 1 ");
  }

  ngOnInit() {
    super.ngOnInit();
    console.log("logout 12 ");
  }

  logout(strategy: string): void {
    super.logout(strategy);
    this.tokenService.clear();
    console.log("logout");
  }
}
