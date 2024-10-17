import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { decrement, increment } from '../store/couter-store/counter.actions';
// import { IncrementAction } from '../store/couter-store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({ countX: 1 }));
    // this.store.dispatch(new IncrementAction(1));
  }

  decrement() {
    this.store.dispatch(decrement({ countX: 1 }));
  }
}
