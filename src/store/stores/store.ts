import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { save, load } from 'redux-localstorage-simple';
import { editorState } from '../';

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
      applyMiddleware(save({ namespace: 'state' }))
    ),
  )
);
if (!localStorage.getItem('state')) {
  localStorage.setItem('state', JSON.stringify(editorState));
}


export const store = configureStore(load({ namespace: 'state' }));
