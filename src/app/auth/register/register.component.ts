/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { NbRegisterComponent } from "@nebular/auth";
import { FormGroup, FormControl, Validators } from "@angular/forms";
//import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
@Component({
  selector: "ngx-register",
  templateUrl: "./register.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./register.component.css"]
})
export class NgxRegisterComponent extends NbRegisterComponent {
  model = { phone_number: "" };
}
