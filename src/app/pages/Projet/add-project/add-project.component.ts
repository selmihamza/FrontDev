import { Component, OnInit } from "@angular/core";
import { ServiceProjetService } from "../services/service-projet.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

interface InterfaceProjet {
  name: String;
  budget: String;
  deadline: String;
  description: String;
}
@Component({
  selector: "ngx-add-project",
  templateUrl: "./add-project.component.html",
  styleUrls: ["./add-project.component.scss"]
})
export class AddProjectComponent implements OnInit {
  erreur: String = "";
  interfaceProjet: InterfaceProjet;
  constructor(
    private projetservice: ServiceProjetService,
    private router: Router
  ) {}

  ngOnInit() {}

  submit(interfaceProjet) {
    this.projetservice.Add(interfaceProjet).subscribe(
      res => {
        console.log(interfaceProjet);
        this.router.navigate(["/pages/project/ListProject"]);
      },

      (error: HttpErrorResponse) => {
        this.erreur = error.message;
        console.log(error.message);
      }
    );
  }
}
