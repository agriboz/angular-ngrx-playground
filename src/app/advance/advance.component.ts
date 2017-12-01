import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Advance } from './../models/advance';
import { AppState } from './../models/app-state';

import * as advanceActions from '../actions/advance.actions';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent implements OnInit {
  advance$: Observable<Advance[]>;
  private test$;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.advance$ = this.store.select(state => state.advance);
    this.getAdvance();
  }

  getAdvance() {
    this.store.dispatch(new advanceActions.LoadAdvanceAction());
  }

}
