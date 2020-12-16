import { Action } from 'redux';
import { Chat } from '../../types/chat.type';

export enum ChatActionTypes {
  FETCH_CHAT = '[Chat] Fetch',
  FETCH_CHAT_SUCCESS = '[Chat] Fetch Success',
  FETCH_CHAT_ERROR = '[Chat] Fetch Error',
  SELECT_CHAT = '[Chat] Select',
}

export interface FetchChat extends Action<ChatActionTypes> {
  type: ChatActionTypes.FETCH_CHAT;
  payload: { personId: string };
}
export interface FetchChatSuccess extends Action<ChatActionTypes> {
  type: ChatActionTypes.FETCH_CHAT_SUCCESS;
  payload: { personId: string; chat: Chat };
}
export interface FetchChatError extends Action<ChatActionTypes> {
  type: ChatActionTypes.FETCH_CHAT_ERROR;
  payload: { error: unknown };
}
export interface SelectChat extends Action<ChatActionTypes> {
  type: ChatActionTypes.SELECT_CHAT;
  payload: { chatId: string };
}

export const fetchChat = (payload: { personId: string }): FetchChat => ({
  type: ChatActionTypes.FETCH_CHAT,
  payload,
});
export const fetchChatSuccess = (payload: { personId: string; chat: Chat }): FetchChatSuccess => ({
  type: ChatActionTypes.FETCH_CHAT_SUCCESS,
  payload,
});
export const selectChat = (payload: { chatId: string }): SelectChat => ({
  type: ChatActionTypes.SELECT_CHAT,
  payload,
});
export const FetchChatError = (payload: { error: unknown }): FetchChatError => ({
  type: ChatActionTypes.FETCH_CHAT_ERROR,
  payload,
});

export type ChatActions = FetchChat | FetchChatSuccess | FetchChatError | SelectChat;
