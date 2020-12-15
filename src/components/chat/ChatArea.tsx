import * as React from 'react';
import { CgAirplane, CgAttachment } from 'react-icons/cg';
import { IMessage } from '../../types/chat.type';
import ChatHeader from './ChatHeader';
import Message from './Message';

const messages: IMessage[] = Array(20)
  .fill(0)
  .map((_, i) => ({
    id: `MSG-${i + 1}`,
    personId: ['kna', 'nmo', 'anm'][Math.floor(Math.random() * 100) % 3],
    content: 'Hey It is a message from me',
    inbound: !(i % 2),
    receivedTime: new Date(Date.now() + i * 60 * 60),
    sentTime: new Date(Date.now() + i * 60 * 60 - 200),
  }));

const ChatArea: React.FC<ChatAreaProps> = ({ isShowingSidebar, toggleSidebar, ...props }) => {
  return (
    <div {...props}>
      <ChatHeader showSidebarToggle={true} toggleSidebar={toggleSidebar} />
      <main
        id="message-container"
        className="my-2 px-4 py-2 flex-1 flex flex-col-reverse space-y-4 space-y-reverse overflow-auto"
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </main>
      <footer id="compose-message" className="p-4 pt-0">
        <div className="flex items-center space-x-2 rounded shadow-md bg-white px-2">
          <button className="p-2 rounded-full hover:bg-gray-200 text-gray-800">
            <CgAttachment className="w-4 h-4" />
          </button>
          <input type="text" className="py-2 flex-1 w-full" placeholder="Message" />
          <button className="p-2 rounded-full hover:bg-gray-200 text-gray-800">
            <CgAirplane className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export interface ChatAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  isShowingSidebar: boolean;
  toggleSidebar: () => void;
}

export default ChatArea;
