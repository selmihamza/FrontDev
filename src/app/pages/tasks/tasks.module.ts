import { NgModule } from "@angular/core";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule
} from "@nebular/theme";

import { ThemeModule } from "../../@theme/theme.module";
import { TasksRoutingModule } from "./tasks-routing.module";
import { TasksComponent } from "./tasks.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { FormsModule as ngFormsModule } from "@angular/forms";
import { ListTaskComponent } from "./list-task/list-task.component";
import { TasksResolver } from "./list-task/tasks.resolver";

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    TasksRoutingModule,
    NbSelectModule,
    NbIconModule,
    Ng2SmartTableModule,
    ngFormsModule
  ],
  declarations: [TasksComponent, ListTaskComponent],
  providers: [TasksResolver]
})
export class TasksModule {}
