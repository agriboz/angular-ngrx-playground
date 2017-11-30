import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Advance } from './../models/advance';
import { AppState } from './../models/app-state';

import * as advanceActions from '../actions/advance.actions';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent implements OnInit {
  displayedColumns = ['id'];
  advance$: Observable<Advance[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.advance$ = this.store.select(state => state.advance);
    this.getAdvance();
  }

  getAdvance() {
    this.store.dispatch(new advanceActions.LoadAdvanceAction());
  }

}
