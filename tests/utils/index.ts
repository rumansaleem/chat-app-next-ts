import { ReactElement, createElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, Middleware, Store } from 'redux';
import createAppStore, { AppState } from '../../src/state';
import { Provider } from 'react-redux';

export function mockStore(
  initialState?: Partial<AppState>,
  middlewares: Middleware[] = [],
): Store<AppState> {
  return createAppStore({ initialState, enhancer: applyMiddleware(...middlewares) });
}

export function renderWithRouter(
  ui: ReactElement,
  { route = '/', ...options }: RenderOptions & { route?: string } = {},
): RenderResult {
  window.history.pushState({}, 'Test Page', route);
  return render(ui, { wrapper: BrowserRouter, ...options });
}

export function renderWithAppState(
  ui: ReactElement,
  store: Store<AppState> = createAppStore({}),
): RenderResult & Store<AppState> {
  const renderResult = render(createElement(Provider, { store }, ui));

  return { ...store, ...renderResult };
}

export function renderWithAppStateAndRouter(
  ui: ReactElement,
  {
    store = createAppStore({}),
    route,
    ...options
  }: RenderOptions & {
    store?: Store<AppState>;
    route?: string;
  } = {},
): RenderResult {
  const renderResult = renderWithRouter(createElement(Provider, { store }, ui), {
    route,
    ...options,
  });
  return { ...store, ...renderResult };
}
