import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServiceProjetService {
  private baseUrl = "http://localhost:8080/auth/projet";
  constructor(private http: HttpClient) {}

  // getProjet(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  Add(interfaceProjet) {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8"
      //Authorization: "Bearer " + localStorage.getItem("token")
    });

    return this.http.post(this.baseUrl, interfaceProjet, {
      headers: reqHeader
    });
  }

  // createProject(interfaceProjet): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}`, interfaceProjet);
  // }

  // updateProject(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  deleteProject(id: number): Observable<any> {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8"
      //Authorization: "Bearer " + localStorage.getItem("token")
    });
    console.log(this.baseUrl + "?id=" + id);

    return this.http.delete(this.baseUrl + "?id=" + id, {
      headers: reqHeader
    });
  }

  getProjectList() {
    return this.http.get(`${this.baseUrl}`);
  }
}
