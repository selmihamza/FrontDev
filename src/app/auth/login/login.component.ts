import { Component } from "@angular/core";
import { NbLoginComponent } from "@nebular/auth";
import { GlobalService } from "../../services/global.service";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html"
})
export class NgxLoginComponent extends NbLoginComponent {}
