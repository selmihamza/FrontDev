import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { ServiceTaskService } from "../services/service-task.service";

@Injectable()
export class TasksResolver implements Resolve<any> {
  constructor(private projectService: ServiceTaskService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let itemId = route.paramMap.get("id");
    return new Promise((resolve, reject) => {
      this.projectService.getTasksList(itemId).subscribe((data: any) => {
        resolve(data);
      });
    });
  }
}
