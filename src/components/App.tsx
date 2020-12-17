import * as React from 'react';
import routes, { SwitchRoutes } from './../routes';

const App: React.FC = () => {
  return <SwitchRoutes routes={routes} />;
};

export default App;
