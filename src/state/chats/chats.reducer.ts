import { createEntityAdapter, EntityAdapter } from '@reduxjs/toolkit';
import { AppState } from '..';
import { Chat, ChatState, IMessage } from '../../types/chat.type';
import { stringifyError } from '../../utils/stringifiers';
import { ChatActions, ChatActionTypes } from './chats.actions';

export const chatsReducerKey = 'chats';

export const chatsAdapter: EntityAdapter<Chat> = createEntityAdapter<Chat>({
  selectId: (chat: Chat) => chat.id,
});

const getDummyChat = (personId: string): Chat => {
  const chat = {
    id: `chat-with-${personId}`,
    personId: personId,
    messages: [],
  };

  const messages: IMessage[] = Array(20)
    .fill(0)
    .map((_, i) => ({
      id: `MSG-${i + 1}`,
      chatId: chat.id,
      content:
        i % 2 == 0
          ? `Hey ${personId}, It is ${i + 1}th message from me`
          : `Hey, It's me ${personId}`,
      inbound: i % 2 === 0,
      receivedTime: new Date(Date.now() + i * 60 * 60),
      sentTime: new Date(Date.now() + i * 60 * 60 - 200),
    }));

  return { ...chat, messages };
};

export const initialChatsState: ChatState = chatsAdapter.getInitialState({
  errorMessage: '',
  isLoading: false,
  selectedChatId: undefined,
});

const seededChatsState = chatsAdapter.setAll(
  initialChatsState,
  ['nmo', 'knr', 'ams'].map((id) => getDummyChat(id)),
);

export function reducer(state = seededChatsState, action: ChatActions): ChatState {
  switch (action.type) {
    case ChatActionTypes.FETCH_CHAT:
      return { ...state, isLoading: true };
    case ChatActionTypes.FETCH_CHAT_SUCCESS:
      return chatsAdapter.addOne({ ...state, isLoading: false }, action.payload.chat);
    case ChatActionTypes.SELECT_CHAT:
      return { ...state, selectedChatId: action.payload.chatId };
    case ChatActionTypes.FETCH_CHAT_ERROR:
      const errorMessage = stringifyError(action.payload.error, '[Chats Error]');
      return { ...state, isLoading: false, errorMessage };
    default:
      return state;
  }
}

export const chatsEntitySelectors = chatsAdapter.getSelectors((state: AppState) => state.chats);
