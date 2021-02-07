import * as React from 'react';
import { render } from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import createAppStore from './state';
import { Provider } from 'react-redux';

function initializeReact(): void {
  const containerEl = document.getElementById('app');
  if (!containerEl) throw new Error('#app element was not found in the DOM.');

  const store = createAppStore({ enhancer: composeWithDevTools() });

  const AppWrapper = (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  render(AppWrapper, containerEl);
}

initializeReact();
