import { AppState } from '..';
import { IMessage } from '../../types/chat.type';

export const selectCurrentMessages = (state: AppState): IMessage[] => {
  const { chats, personId } = state.chats;

  if (!personId) {
    return [];
  }

  return chats[personId];
};
