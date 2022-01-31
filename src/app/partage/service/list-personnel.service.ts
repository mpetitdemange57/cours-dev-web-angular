import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Person} from "../../model/Person";


@Injectable({
  providedIn: 'root'
})
export class ListPersonnelService {

  private employees = new BehaviorSubject<string>('');

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

  get employees$(): Observable<string> {
    return this.employees.asObservable();
  }

  updatedEmployeeList(data: string){
    this.employees.next(data);
  }

  fetch(): Observable<Person[]> {
    return this.http.get<Person[]>(this.urlServer.tousLesEmployes);
  }

  search(name: string): Observable<Person[]> {
    return this.http.get<Person[]>(this.urlServer.filterByName.replace(':name', name));
  }

  fetchRandom(): Observable<Person> {
    return this.http.get<Person>(this.urlServer.employeAleatoire);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.urlServer.unEmploye.replace(':id', id));
  }

  create(employe: Person): Observable<Person> {
    return this.http.post<Person>(this.urlServer.tousLesEmployes, employe);
  }

  fetchOne(id: string): Observable<Person> {
    return this.http.get<Person>(this.urlServer.unEmploye.replace(':id', id));
  }

  update(employe: Person): Observable<Person> {
    return this.http.put<Person>(this.urlServer.unEmploye.replace(':id', employe.id), employe);
  }
}
