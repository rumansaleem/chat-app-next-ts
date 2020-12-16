import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import store from '../state';
import routes, { SwitchRoutes } from './../routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <SwitchRoutes routes={routes} />
      </Router>
    </Provider>
  );
};

export default App;
