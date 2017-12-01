import { Observable } from 'rxjs/Observable';
import { AppState } from './../models/app-state';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload, } from '@ngrx/effects';
import { AdvanceService } from '../advance/advance.service';
import { EmployeeService } from '../employee/employee.service';
import { Store, Action } from '@ngrx/store';
import * as advanceActions from '../actions/advance.actions';
import * as employeeActions from '../actions/employee.actions';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/do';
@Injectable()
export class AdvanceEffects {
  private test;
  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private advanceService: AdvanceService,
              private employeeService: EmployeeService) { }

  @Effect() loadAdvance$ = this.actions$
  .ofType(advanceActions.LOAD_ADVANCE)
    .switchMap(() => {
      return this.employeeService.loadEmployee()
        .mergeMap((data: any) => {
          if (data) {
            const {id} = data;
            return this.advanceService.loadAdvance(id);
          }
        });
    })
    .map((advance) =>  new advanceActions.LoadAdvanceSuccessAction(advance));

}
