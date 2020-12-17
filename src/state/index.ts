import * as React from 'react';
import { combineReducers, createStore, StoreEnhancer } from 'redux';
import * as fromPeople from './people/people.reducer';
import * as fromChats from './chats/chats.reducer';
import { Provider } from 'react-redux';

export const rootReducer = combineReducers({
  [fromPeople.peopleReducerKey]: fromPeople.reducer,
  [fromChats.chatsReducerKey]: fromChats.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export function withStore({
  initialState,
  enhancer,
}: {
  initialState?: AppState;
  enhancer?: StoreEnhancer;
} = {}): React.FC {
  const store = createStore(rootReducer, initialState, enhancer);

  return function StoreProvider({ children }): JSX.Element {
    return React.createElement(Provider, { store }, children);
  };
}

export default withStore;
