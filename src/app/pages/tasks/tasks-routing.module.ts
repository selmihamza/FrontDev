import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TasksComponent } from "./tasks.component";
import { ListTaskComponent } from "./list-task/list-task.component";
import { TasksResolver } from "./list-task/tasks.resolver";

const routes: Routes = [
  {
    path: "",
    component: TasksComponent,
    children: [
      {
        path: ":id",
        component: ListTaskComponent,
        resolve: { data: TasksResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
