import { RenderResult, screen } from '@testing-library/react';
import * as React from 'react';
import { Store } from 'redux';
import App from '../src/components/App';
import { AppState } from '../src/state';
import ChatPage, { ChatPageProps } from '../src/components/chat/ChatPage';
import { renderWithAppStateAndRouter } from './utils';

const renderAppWithRouter = ({
  store,
  route = '/',
}: {
  store?: Store<AppState>;
  route?: string;
}): RenderResult => {
  return renderWithAppStateAndRouter(<App />, { store, route });
};

jest.mock('../src/components/chat/ChatPage', () => {
  const ChatPage = jest.fn(({ chatId }) => <div>{chatId}</div>);
  return ChatPage;
});

describe('app routes & rendering', () => {
  it('route "/chats" renders ChatPage component w/o chat Id', () => {
    const route = '/chats';
    renderAppWithRouter({ route });

    expect(ChatPage).toHaveBeenCalledWith<[ChatPageProps, React.Context<any>]>(
      {},
      expect.any(Object),
    );
  });

  it('route "/chats/:chatId" renders ChatPage component with given chatId', () => {
    const chatId = 'some-chat-id';
    const route = `/chats/${chatId}`;
    renderAppWithRouter({ route });

    expect(ChatPage).toHaveBeenCalledWith<[ChatPageProps, React.Context<any>]>(
      { chatId },
      expect.any(Object),
    );
  });

  it('unknown routes renders No Match component', () => {
    const route = '/some-unknown-path-that-will-probably-never-exist-in-the-app';
    renderAppWithRouter({ route });

    expect(screen.getByTestId('NoMatch')).toBeInTheDocument();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
