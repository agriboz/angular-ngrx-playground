import { Action } from '@ngrx/store';

export const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE';
export const LOAD_EMPLOYEE_SUCCESS = 'LOAD_EMPLOYEE_SUCCESS';

export class LoadEmployeeAction implements Action {
  readonly type = LOAD_EMPLOYEE;
  constructor() {}
}

export class LoadEmployeeSuccessAction {
  readonly type = LOAD_EMPLOYEE_SUCCESS;
  constructor(public payload) {}
}

export type Actions
  = LoadEmployeeAction
  | LoadEmployeeSuccessAction;
