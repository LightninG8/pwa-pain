import { initialState } from '../constants/initialState';
import { CounterState, CounterAction } from '../../types';
import { ACTIONS } from '../constants';

export const rootReducer = (state = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case ACTIONS.DEC:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ACTIONS.INC:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default: return state;
  }
};
