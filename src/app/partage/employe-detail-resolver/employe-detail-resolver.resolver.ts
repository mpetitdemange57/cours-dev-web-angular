import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ListPersonnelService} from "../service/list-personnel.service";
import {Person} from "../../model/Person";

@Injectable({
  providedIn: 'root'
})
export class EmployeDetailResolverResolver implements Resolve<Person> {

  constructor(private readonly peopleService: ListPersonnelService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> {
    const employeId: string | null = route.paramMap.get('id');
    if(employeId != null){
      return this.peopleService.fetchOne(employeId);
    }
    else
      return new Observable<Person>();
  }
}
