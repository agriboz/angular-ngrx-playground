import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../models/app-state';
import { Employee } from './../models/employee';
import * as employeeActions from '../actions/employee.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee$: Observable<Employee>;

  constructor(private store: Store<AppState>) {
    this.employee$ = this.store.select(state => state.employee);
  }


  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.store.dispatch(new employeeActions.LoadEmployeeAction());
  }

}
