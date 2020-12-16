import * as React from 'react';
import { CgMenu } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { selectPersonById } from '../../state/people/people.selectors';
import { Chat } from '../../types/chat.type';

const ChatHeader: React.FC<ChatHeaderProps> = ({
  chat = { id: '', personId: '', messages: [] },
  showSidebarToggle,
  toggleSidebar,
}) => {
  const person = useSelector(selectPersonById(chat.personId)) ?? {
    id: '',
    email: '',
    phone: '',
    name: '(No Name)',
    imageUrl: 'https://placehold.it/64',
  };

  return (
    <header
      id="header"
      className="relative bg-white px-4 py-2 shadow-md flex items-center space-x-4 z-10"
    >
      {showSidebarToggle && (
        <button className="p-1" onClick={(): void => toggleSidebar()}>
          <CgMenu className="w-6 h-6" />
        </button>
      )}
      <img src={person.imageUrl} alt={person.name} className="w-8 h-8 rounded-full" />
      <h4 className="font-bold">{person.name}</h4>
    </header>
  );
};

export interface ChatHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  chat?: Chat;
  showSidebarToggle: boolean;
  toggleSidebar: () => void;
}

export default ChatHeader;
