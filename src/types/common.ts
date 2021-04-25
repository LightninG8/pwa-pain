import { ACTIONS } from '../store/constants/actionsNames';

export interface CounterState {
  counter: number;
}

export interface DecAction {
  type: typeof ACTIONS.DEC;
}

export interface IncAction {
  type: typeof ACTIONS.INC;
}

export type CounterAction = IncAction | DecAction;
