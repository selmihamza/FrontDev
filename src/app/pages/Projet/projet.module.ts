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
import { ProjetRoutingModule } from "./projet-routing.module";
import { ProjetComponent } from "./projet.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { FormsModule as ngFormsModule } from "@angular/forms";
import { AddProjectComponent } from "./add-project/add-project.component";
import { ListProjectComponent } from "./list-project/list-project.component";

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
    ProjetRoutingModule,
    NbSelectModule,
    NbIconModule,
    Ng2SmartTableModule,
    ngFormsModule
  ],
  declarations: [ProjetComponent, AddProjectComponent, ListProjectComponent]
})
export class ProjetModule {}
