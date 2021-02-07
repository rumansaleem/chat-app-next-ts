import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';
import { Store } from 'redux';
import ChatPage from '../../src/components/chat/ChatPage';
import { AppState } from '../../src/state';
import { selectChat } from '../../src/state/chats/chats.actions';
import { chatsAdapter, initialChatsState } from '../../src/state/chats/chats.reducer';
import { initialPeopleState, peopleAdapter } from '../../src/state/people/people.reducer';
import { Chat, ChatState } from '../../src/types/chat.type';
import { IPerson, PeopleState } from '../../src/types/person.type';
import { mockStore, renderWithAppStateAndRouter } from '../utils';

const renderChatPage = ({ chatId, store }: { chatId?: string; store?: Store<AppState> } = {}) => {
  return renderWithAppStateAndRouter(<ChatPage chatId={chatId} />, {
    route: `/chats/${chatId ?? ''}`,
    store,
  });
};

describe('<ChatPage />', () => {
  const people: IPerson[] = [
    {
      id: 'john',
      name: 'John Doe',
      email: 'emai',
      imageUrl: '',
      phone: '',
    },
  ];
  const chats: Chat[] = [
    {
      id: 'chat-with-john',
      personId: 'john',
      messages: [
        {
          id: 'msg-#1',
          chatId: 'chat-with-john',
          inbound: true,
          content: 'Hello There',
          sentTime: new Date(),
          receivedTime: new Date(),
        },
      ],
    },
  ];

  const peopleState = peopleAdapter.setAll<PeopleState>(initialPeopleState, people);
  const chatState = chatsAdapter.setAll<ChatState>(initialChatsState, chats);
  const initialState: Partial<AppState> = { people: peopleState, chats: chatState };

  it('chatId is undefined => ', () => {
    const store = mockStore(initialState);
    renderChatPage({ store });

    const firstChatLinkPersonNameEl = screen.getByText(people[0].name);
    const storeMatch = store.getState().chats;
    expect(store.dispatch).not.toHaveBeenCalled();
    expect(firstChatLinkPersonNameEl).toBeInTheDocument();

    expect(screen.getByText(people[0].name)).toBeInTheDocument();
    expect(screen.getByText(chats[0].messages[0].content)).toBeInTheDocument();
  });
});
