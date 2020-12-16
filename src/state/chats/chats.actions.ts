import { Action } from 'redux';
import { IMessage } from '../../types/chat.type';

export enum ChatActionTypes {
  LOAD_CHAT = '[Chat] Load',
  LOAD_CHAT_SUCCESS = '[Chat] Load Success',
  LOAD_CHAT_FAILED = '[Chat] Load Failed',
}

export class LoadChat implements Action<ChatActionTypes> {
  readonly type = ChatActionTypes.LOAD_CHAT;
  constructor(public payload: { personId: string }) {}
}

export class LoadChatSuccess implements Action<ChatActionTypes> {
  readonly type = ChatActionTypes.LOAD_CHAT_SUCCESS;
  constructor(public payload: { personId: string; messages: IMessage[] }) {}
}

export class LoadChatFailed implements Action<ChatActionTypes> {
  readonly type = ChatActionTypes.LOAD_CHAT_FAILED;
  constructor(public payload: { personId: string; error: unknown }) {}
}

export type ChatActions = LoadChat | LoadChatSuccess | LoadChatFailed;
