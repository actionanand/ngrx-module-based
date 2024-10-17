/* eslint-disable @ngrx/no-typed-global-store */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

// import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { selectCounter, selectDouble } from '../store/couter-store/counter.selector';
import { AppState } from '../store/app.state.model';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter!: number;

  count$!: Observable<number>;
  doubleCount$!: Observable<number>;

  countSub!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.count$ = this.store.select('counter');
    // this.count$ = this.store.select(s => s.counter);

    this.count$ = this.store.select(selectCounter);
    this.doubleCount$ = this.store.select(selectDouble);

    this.countSub = this.count$.subscribe({
      next: val => (this.counter = val),
    });
  }

  ngOnDestroy(): void {
    if (this.countSub) {
      this.countSub.unsubscribe();
    }
  }
}
