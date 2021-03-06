import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Advance } from './../models/advance';

import * as fromStore from '../store';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent implements OnInit {
  advance$: Observable<Advance[]>;

  constructor(private store: Store<fromStore.AdvancesState>) {

  }

  ngOnInit() {
    this.advance$ = this.store.select(fromStore.getAllAdvances);
    this.store.dispatch(new fromStore.LoadAdvanceAction());
  }

}
