export interface IMessage {
  id: string;
  personId: string;
  inbound: boolean;
  content: string;
  sentTime: Date | null;
  receivedTime: Date | null;
}

export interface ChatState {
  isLoading: boolean;
  personId: string | null;
  errorMessage: string;
  chats: {
    [personId: string]: IMessage[];
  };
}
