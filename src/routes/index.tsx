import * as React from 'react';
import {
  Redirect,
  RedirectProps,
  Route,
  RouteComponentProps,
  Switch,
  SwitchProps,
} from 'react-router';
import ChatPage from '../components/chat/ChatPage';

const routes: RouteInfo[] = [
  {
    type: 'redirect',
    exact: true,
    path: '/',
    redirect: { to: '/chat' },
  },
  {
    type: 'component',
    path: '/chat',
    component: ChatPage,
  },
];

export const SwitchRoutes: React.FC<SwitchRoutesProps> = ({ routes, ...props }) => {
  return (
    <Switch {...props}>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact ?? false}
          render={(props): JSX.Element =>
            route.type === 'redirect' ? (
              <Redirect {...route.redirect} />
            ) : (
              <route.component {...props} routes={route.routes} />
            )
          }
        />
      ))}
    </Switch>
  );
};

export type SwitchRoutesProps = SwitchProps & { routes: RouteInfo[] };
export type PageComponent = React.FC<{ routes?: RouteInfo[] } & RouteComponentProps>;

interface BaseRouteInfo {
  path: string;
  exact?: boolean;
  routes?: RouteInfo[];
}

interface ComponentRouteInfo extends BaseRouteInfo {
  type: 'component';
  component: PageComponent;
}

interface RedirectRouteInfo extends BaseRouteInfo {
  type: 'redirect';
  redirect: RedirectProps;
}

export type RouteInfo = ComponentRouteInfo | RedirectRouteInfo;

export default routes;
