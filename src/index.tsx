import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './state';

function initializeReact(): void {
  const containerEl = document.getElementById('app');
  if (!containerEl) throw new Error('#app element was not found in the DOM.');
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    containerEl,
  );
}

initializeReact();
