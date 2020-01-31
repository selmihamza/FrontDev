import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServiceTaskService {
  private baseUrl = "http://localhost:8080/auth/tache";
  constructor(private http: HttpClient) {}

  Add(interfaceTask, id: any) {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8"
      //Authorization: "Bearer " + localStorage.getItem("token")
    });

    return this.http.post(this.baseUrl + "/" + id, interfaceTask, {
      headers: reqHeader
    });
  }

  update(interfaceTask, id: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8"
      //Authorization: "Bearer " + localStorage.getItem("token")
    });
    return this.http.put(this.baseUrl + "/" + id, interfaceTask, {
      headers: reqHeader
    });
  }

  deleteTask(id: number): void {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8"
      //Authorization: "Bearer " + localStorage.getItem("token")
    });
    this.http
      .delete(this.baseUrl + "/" + id, {
        headers: reqHeader
      })
      .toPromise()
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  getTasksList(id) {
    return this.http.get("http://localhost:8080/auth/projet/" + id);
  }
}
