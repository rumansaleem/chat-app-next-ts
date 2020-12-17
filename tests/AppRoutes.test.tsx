import * as React from 'react';
import App from '../src/components/App';
import withStore, { AppState } from '../src/state';
import { renderWithRouter } from './utils';

const renderAppWithRouter = ({
  initialState,
  route = '/',
}: {
  initialState?: AppState;
  route?: string;
}) => {
  const StoreProvider = withStore({ initialState });
  return renderWithRouter(
    <StoreProvider>
      <App />
    </StoreProvider>,
    { route },
  );
};

describe('app routes & rendering', () => {
  it('route "/chats" renders empty chat page', () => {
    const route = '/chats';
    const { getByTestId } = renderAppWithRouter({ route });

    expect(getByTestId('ChatPage')).toBeInTheDocument();
  });

  it('route "/chats/:chatId" renders empty chat page', () => {
    const route = '/chats/some-chat-id';
    const { getByTestId } = renderAppWithRouter({ route });

    expect(getByTestId('ChatPage')).toBeInTheDocument();
  });

  it('unknown routes renders No Match component', () => {
    const route = '/some-unknown-path-that-will-probably-never-exist-in-the-app';
    const { getByTestId, getByText } = renderAppWithRouter({ route });

    expect(getByTestId('NoMatch')).toBeInTheDocument();
    expect(getByText(/404/i)).toBeInTheDocument();
  });
});
