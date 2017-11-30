import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { AdvanceService } from '../advance/advance.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import * as advanceActions from '../actions/advance.actions';

@Injectable()
export class AdvanceEffects {

  constructor(private actions$: Actions,
              private advanceService: AdvanceService) { }

  @Effect() loadAdvance$ = this.actions$
    .ofType(advanceActions.LOAD_ADVANCE)
    .switchMap(() => this.advanceService.loadAdvance())
    .map(advance => (new advanceActions.LoadAdvanceSuccessAction(advance)));
}
