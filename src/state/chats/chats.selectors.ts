import { EntityId } from '@reduxjs/toolkit';
import { AppState } from '..';
import { Chat } from '../../types/chat.type';
import { chatsEntitySelectors } from './chats.reducer';

export const selectAllChatIds = (state: AppState): EntityId[] => {
  return chatsEntitySelectors.selectIds(state);
};

export const selectFirstChatId = (state: AppState): EntityId => {
  return chatsEntitySelectors.selectIds(state)[0];
};

export const selectAllChats = (state: AppState): Chat[] => {
  return chatsEntitySelectors.selectAll(state);
};

export const selectCurrentChatId = (state: AppState): string | undefined => {
  return state.chats.selectedChatId;
};

export const selectCurrentMessages = (state: AppState): Chat | undefined => {
  const chatId = state.chats.selectedChatId;

  if (!chatId) return;

  return chatsEntitySelectors.selectById(state, chatId);
};
