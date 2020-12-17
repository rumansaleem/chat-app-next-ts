import * as React from 'react';
import { render } from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import withStore from './state';

function initializeReact(): void {
  const containerEl = document.getElementById('app');
  if (!containerEl) throw new Error('#app element was not found in the DOM.');

  const StoreProvider = withStore({ enhancer: composeWithDevTools() });
  const AppWrapper = (
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  );

  render(AppWrapper, containerEl);
}

initializeReact();
