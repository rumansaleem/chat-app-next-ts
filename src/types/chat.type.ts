import type { EntityState } from '@reduxjs/toolkit';

export interface IMessage {
  id: string;
  chatId: string;
  inbound: boolean;
  content: string;
  sentTime: Date | null;
  receivedTime: Date | null;
}

export interface Chat {
  id: string;
  personId: string;
  messages: IMessage[];
}
export interface ChatState extends EntityState<Chat> {
  isLoading: boolean;
  selectedChatId: string | undefined;
  errorMessage: string;
}
export interface MessagesState extends EntityState<Chat> {
  isLoading: boolean;
  selectedChatId: string | undefined;
  errorMessage: string;
}
