import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
//import { SmartTableData } from "../../../@core/data/smart-table";
import { ServiceProjetService } from "../services/service-projet.service";

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
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
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

  constructor(private service: ServiceProjetService) {
    this.service.getProjectList().subscribe((data: any) => {
      //console.log(JSON.stringify(data));
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();

      console.log(event.data.id);
      this.service.deleteProject(event.data.id);
    } else {
      event.confirm.reject();
    }
  }
}
