import { combineReducers, createStore, Store, StoreEnhancer } from 'redux';
import * as fromPeople from './people/people.reducer';
import * as fromChats from './chats/chats.reducer';

export const rootReducer = combineReducers({
  [fromPeople.peopleReducerKey]: fromPeople.reducer,
  [fromChats.chatsReducerKey]: fromChats.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

function createAppStore({
  initialState,
  enhancer,
}: {
  initialState?: Partial<AppState>;
  enhancer?: StoreEnhancer;
}): Store<AppState> {
  return createStore(rootReducer, initialState, enhancer);
}

export default createAppStore;
