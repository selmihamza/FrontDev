import { Injectable } from "@angular/core";
import { NbAuthService, NbAuthJWTToken } from "@nebular/auth";

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  user = {};
  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
      }
    });
  }
}
