import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';

function initializeReact(): void {
  const containerEl = document.getElementById('app');
  if (!containerEl) throw new Error('#app element was not found in the DOM.');
  render(React.createElement(App), containerEl);
}

initializeReact();
