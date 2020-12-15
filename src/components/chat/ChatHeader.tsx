import * as React from 'react';
import { CgMenu } from 'react-icons/cg';

const ChatHeader: React.FC<ChatHeaderProps> = ({ showSidebarToggle, toggleSidebar }) => {
  return (
    <header id="header" className="bg-white px-4 py-2 shadow-md flex items-center space-x-4">
      {showSidebarToggle && (
        <button className="p-1" onClick={(): void => toggleSidebar()}>
          <CgMenu className="w-6 h-6" />
        </button>
      )}
      <img src="https://placehold.it/64" alt="Sender Image" className="w-8 h-8 rounded-full" />
      <h4 className="font-bold">Sender Name</h4>
    </header>
  );
};

export interface ChatHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showSidebarToggle: boolean;
  toggleSidebar: () => void;
}

export default ChatHeader;
