import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { save, load } from 'redux-localstorage-simple';
import { initialState } from '../';
import { CounterState } from '../../types';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = (preloadedState: any) => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(save({ namespace: 'counter' }))
    ),
  )
);
if (!localStorage.getItem('counter')) {
  localStorage.setItem('counter', JSON.stringify(initialState));
}


export const store = configureStore(load({ namespace: 'counter' }));
