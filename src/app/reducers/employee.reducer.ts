import * as fromEmployee from '../actions/employee.actions';

export function employeeReducer(state = {}, action: fromEmployee.Actions) {
  console.log(state);
  switch (action.type) {
    case fromEmployee.LOAD_EMPLOYEE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
