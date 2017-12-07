import { Observable } from 'rxjs/Observable';
import { AppState } from './../models/app-state';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload, } from '@ngrx/effects';
import { AdvanceService } from '../advance/advance.service';
import { EmployeeService } from '../employee/employee.service';
import { Store, Action } from '@ngrx/store';
import { Advance } from '../models/advance';
import * as advanceActions from '../store/actions/advance.actions';
import * as employeeActions from '../store/actions/employee.actions';

import { switchMap, map } from 'rxjs/Operators';

@Injectable()
export class AdvanceEffects {
  private test;
  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private advanceService: AdvanceService,
              private employeeService: EmployeeService) { }

  @Effect() loadAdvance$ = this.actions$
    .ofType(advanceActions.LOAD_ADVANCE)
    .switchMap((data) => this.employeeService.loadEmployee())
    .switchMap((data) => this.advanceService.loadAdvance(data['id']))
    .map((advance: Advance[]) =>  new advanceActions.LoadAdvanceSuccessAction(advance));

}
