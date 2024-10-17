import { createAction, props } from '@ngrx/store';
// import { Action } from '@ngrx/store';

// export const INCREMENT = '[Counter] Increment';

export enum CounterActionTypes {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
}

export const increment = createAction(CounterActionTypes.INCREMENT, props<{ countX: number }>());

export const decrement = createAction(CounterActionTypes.DECREMENT, props<{ countX: number }>());

/*
// old method
// eslint-disable-next-line @ngrx/prefer-action-creator
export class IncrementAction implements Action {
  // readonly type = INCREMENT;
  readonly type = CounterActionTypes.INCREMENT;

  constructor(public countX: number) {}
}

export type CounterActions = IncrementAction;
*/
