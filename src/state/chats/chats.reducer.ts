import { ChatState, IMessage } from '../../types/chat.type';
import { stringifyError } from '../../utils/stringifiers';
import { ChatActions, ChatActionTypes } from './chats.actions';

export const chatsReducerKey = 'chats';

const getDummyChat = (personId: string): IMessage[] => {
  return Array(20)
    .fill(0)
    .map((_, i) => ({
      id: `MSG-${i + 1}`,
      personId,
      content:
        i % 2 == 0
          ? `Hey ${personId}, It is ${i + 1}th message from me`
          : `Hey, It's me ${personId}`,
      inbound: i % 2 === 0,
      receivedTime: new Date(Date.now() + i * 60 * 60),
      sentTime: new Date(Date.now() + i * 60 * 60 - 200),
    }));
};

const initialChatsState: ChatState = {
  errorMessage: '',
  isLoading: false,
  personId: null,
  chats: {},
};

export function reducer(state = initialChatsState, action: ChatActions): ChatState {
  switch (action.type) {
    case ChatActionTypes.LOAD_CHAT:
      return { ...state, isLoading: true, personId: action.payload.personId };
    case ChatActionTypes.LOAD_CHAT_SUCCESS:
      const { personId, messages } = action.payload;
      const oldChats = state.chats;
      return { ...state, isLoading: false, chats: { ...oldChats, [personId]: messages } };
    case ChatActionTypes.LOAD_CHAT_FAILED:
      const errorMessage = stringifyError(action.payload.error, '[Chats Error]');
      return { ...state, isLoading: false, errorMessage };
    default:
      return state;
  }
}
