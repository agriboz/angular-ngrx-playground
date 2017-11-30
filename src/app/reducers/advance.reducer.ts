import * as fromAdvance from '../actions/advance.actions';

export function advanceReducer(state = [], action) {
  switch (action.type) {
    case fromAdvance.LOAD_ADVANCE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
