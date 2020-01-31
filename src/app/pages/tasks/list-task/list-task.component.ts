import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { HttpErrorResponse } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

//import { SmartTableData } from "../../../@core/data/smart-table";
import { ServiceTaskService } from "../services/service-task.service";
interface InterfaceProjet {
  name: String;
  deadline: String;
  description: String;
}
@Component({
  selector: "ngx-list-task",
  templateUrl: "./list-task.component.html",
  styleUrls: ["./list-task.component.scss"]
})
export class ListTaskComponent implements OnInit {
  projet: any;

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }
  async getData() {
    this.route.data.subscribe(routeData => {
      const data = routeData["data"];
      this.projet = data;
      this.source.load(data.taches);
    });
  }

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
  constructor(
    private service: ServiceTaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log(this.route);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
      this.service.deleteTask(event.data.id);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (event.newData) {
      const { name, deadline, description } = event.newData;
      this.service
        .Add({ name, deadline, description }, this.projet.id)
        .subscribe(
          res => {
            this.router.navigate(["/pages/tasks/ListTask"]);
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
      this.service.update(event.newData, this.projet.id).subscribe(
        res => {
          this.router.navigate(["/pages/tasks/ListTask"]);
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
}
