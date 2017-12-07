import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { EmployeeService } from '../employee/employee.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import * as employeeActions from '../store/actions/employee.actions';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeEffects {

  constructor(private actions$: Actions,
              private employeeService: EmployeeService) { }

  @Effect() loadEmployee$: Observable<Action> = this.actions$
    .ofType(employeeActions.LOAD_EMPLOYEE)
    .switchMap(() => this.employeeService.loadEmployee())
    .map(employee => new employeeActions.LoadEmployeeSuccessAction(employee));
}
