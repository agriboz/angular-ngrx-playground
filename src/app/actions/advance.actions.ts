import { Action } from '@ngrx/store';

export const LOAD_ADVANCE = 'LOAD_ADVANCE';
export const LOAD_ADVANCE_SUCCESS = 'LOAD_ADVANCE_SUCCESS';

export class LoadAdvanceAction implements Action {
  readonly type = LOAD_ADVANCE;

  constructor() { }
}

export class LoadAdvanceSuccessAction implements Action {
  readonly type = LOAD_ADVANCE_SUCCESS;

  constructor(public payload) {}
}

export type Actions
  = LoadAdvanceAction
  | LoadAdvanceSuccessAction;
