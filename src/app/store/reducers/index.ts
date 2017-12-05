import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromAdvance from './advance.reducer';

export interface AdvancesState {
  advances: fromAdvance.AdvanceState;
}

export const reducers: ActionReducerMap<AdvancesState> = {
  advances: fromAdvance.advanceReducer
};

export const getAdvancesState = createFeatureSelector<AdvancesState>('advancesList');

// advanes state

export const getAdvanceState = createSelector(
  getAdvancesState,
  (state: AdvancesState) => state.advances
);

export const getAllAdvances = createSelector(getAdvanceState, fromAdvance.getAdvances);
export const getAdvancesLoaded = createSelector(
  getAdvanceState,
  fromAdvance.getAdvancesLoaded
);
export const getAdvancesLoading = createSelector(
  getAdvanceState,
  fromAdvance.getAdvancesLoading
);

