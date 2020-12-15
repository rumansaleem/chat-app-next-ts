import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes, { SwitchRoutes } from './../routes';

const App: React.FC = () => {
  return (
    <Router>
      <SwitchRoutes routes={routes} />
    </Router>
  );
};

export default App;
