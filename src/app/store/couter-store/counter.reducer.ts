import { createReducer, on } from '@ngrx/store';
// import { Action } from '@ngrx/store';

import { decrement, increment, set } from './counter.actions';
// import { CounterActions, INCREMENT, IncrementAction } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action): number => state + action.countX),
  on(decrement, (state, action): number => state - action.countX),
  on(set, (state, action): number => action.countX),
);

/*
// without using `createReducer` : old method
export function counterReducer(state = initialState, action: CounterActions | Action) {
  if (action.type === INCREMENT) {
    return state + (action as IncrementAction).countX;
  }
  return state;
}
*/
