import * as fromAdvance from '../actions/advance.actions';
import { Advance } from '../../models/advance';

export interface AdvanceState {
  data: Advance[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: AdvanceState = {
  data: [
    { amount: 1 },
    { amount: 2 }
  ],
  loaded: false,
  loading: false
};

export function advanceReducer(state = initialState, action: fromAdvance.Actions): AdvanceState {
  switch (action.type) {
    case fromAdvance.LOAD_ADVANCE:
      return {
        ...state,
        loading: true
      };
    case fromAdvance.LOAD_ADVANCE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
}


export const getAdvancesLoading = (state: AdvanceState) => state.loading;
export const getAdvancesLoaded = (state: AdvanceState) => state.loaded;
export const getAdvances = (state: AdvanceState) => state.data;
