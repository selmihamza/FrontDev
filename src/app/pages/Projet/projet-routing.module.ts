import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProjetComponent } from "./projet.component";
import { AddProjectComponent } from "./add-project/add-project.component";
import { ListProjectComponent } from "./list-project/list-project.component";

const routes: Routes = [
  {
    path: "",
    component: ProjetComponent,
    children: [
      {
        path: "addProject",
        component: AddProjectComponent
      },
      {
        path: "ListProject",
        component: ListProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule {}
