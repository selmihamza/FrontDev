import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

//import { SmartTableData } from "../../../@core/data/smart-table";
import { ServiceProjetService } from "../services/service-projet.service";
interface InterfaceProjet {
  name: String;
  budget: String;
  deadline: String;
  description: String;
}
@Component({
  selector: "ngx-list-project",
  templateUrl: "./list-project.component.html",
  styleUrls: ["./list-project.component.scss"]
})
export class ListProjectComponent implements OnInit {
  ngOnInit() {}

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: "ID",
        type: "number"
      },
      name: {
        title: "Name",
        type: "string"
      },
      budget: {
        title: "Budget",
        type: "string"
      },
      deadline: {
        title: "Deadline",
        type: "string"
      },
      description: {
        title: "Description",
        type: "string"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  interfaceProjet: InterfaceProjet;
  constructor(private service: ServiceProjetService, private router: Router) {
    this.service.getProjectList().subscribe((data: any) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
      this.service.deleteProject(event.data.id);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (event.newData) {
      const { name, budget, deadline, description } = event.newData;
      this.service.Add({ name, budget, deadline, description }).subscribe(
        res => {
          this.router.navigate(["/pages/project/ListProject"]);
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      );
      event.confirm.resolve(event);
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm = event => {
    if (event.newData) {
      this.service.update(event.newData).subscribe(
        res => {
          this.router.navigate(["/pages/project/ListProject"]);
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      );
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  };

  onCustomAction(event) {
    this.router.navigate(["/pages/project/tasks/" + event.data.id]);
    //console.log(event.data.id);
  }
}
