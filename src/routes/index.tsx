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
    redirect: { to: '/chats' },
  },
  {
    type: 'component',
    path: '/chats/:chatId?',
    component: function ChatRouteComp({
      match,
    }: RouteComponentProps<{ chatId?: string }>): JSX.Element {
      return <ChatPage chatId={match.params.chatId} />;
    },
  },
  {
    type: 'component',
    path: '*',
    component: function ErrorPage(): JSX.Element {
      return (
        <h1
          data-testid="NoMatch"
          className="font-bold text-xl h-screen flex items-center justify-center"
        >
          Error: 404 - Not Found
        </h1>
      );
    },
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
export type RouterPageProps = { routes?: RouteInfo[] };

interface BaseRouteInfo {
  path: string | string[] | undefined;
  exact?: boolean;
  routes?: RouteInfo[];
}

interface ComponentRouteInfo extends BaseRouteInfo {
  type: 'component';
  component: React.FC<RouteComponentProps & RouterPageProps>;
}

interface RedirectRouteInfo extends BaseRouteInfo {
  type: 'redirect';
  redirect: RedirectProps;
}

export type RouteInfo = ComponentRouteInfo | RedirectRouteInfo;

export default routes;
