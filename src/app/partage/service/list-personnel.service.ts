import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListPersonnelService {
  private urlServer:any = {};

  constructor(private readonly http: HttpClient) {

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls

    Object.keys(environment.backend.endpoints).forEach(
      // @ts-ignore
      k => (this.urlServer[k] = `${baseUrl}${environment.backend.endpoints[k]}`)
    );
    console.log(this.urlServer);

  }

  fetch(): Observable<any> {
    return this.http.get(this.urlServer.tousLesEmployes);
  }

  fetchRandom(): Observable<any> {
    return this.http.get(this.urlServer.employeAleatoire);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.urlServer.unEmploye.replace(':id', id));
  }

  create(employe: any): Observable<any> {
    return this.http.post(this.urlServer.tousLesEmployes, employe);
  }

  fetchOne(id: string): Observable<any> {
    return this.http.get(this.urlServer.unEmploye.replace(':id', id));
  }

  update(employe: any): Observable<any> {
    return this.http.put(this.urlServer.unEmploye.replace(':id', employe.id), employe);
  }
}
