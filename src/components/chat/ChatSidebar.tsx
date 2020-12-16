import * as React from 'react';
import { CgClose } from 'react-icons/cg';
import { shallowEqual, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAllChats } from '../../state/chats/chats.selectors';
import { selectAllPeopleEntities } from '../../state/people/people.selectors';
import { IPerson } from '../../types/person.type';
import { keyIn } from '../../utils/typeGuards';
import Person from '../people/Person';

const ChatSidebar: React.FC<ChatSidebarProps> = ({ hideSidebar, className = '', ...props }) => {
  const people = useSelector(selectAllPeopleEntities, shallowEqual);
  const chatsWithDefinedPerson = useSelector(selectAllChats).filter((chat) =>
    keyIn(chat.personId, people),
  );

  return (
    <div {...props} className={`${className}`}>
      <header className="px-4 py-2 flex items-center justify-between">
        <h4 className="font-black tracking-wide text-2xl leading-normal">People</h4>
        <button
          className="p-1 hover:bg-gray-200 rounded"
          onClick={(): void => {
            hideSidebar();
          }}
        >
          <CgClose className="w-6 h-6" />
        </button>
      </header>
      <ul className="space-y-1 p-2">
        {chatsWithDefinedPerson.map((chat) => (
          <li key={chat.id}>
            <NavLink
              to={`/chats/${chat.id}`}
              onClick={(): void => hideSidebar()}
              className="block hover:bg-gray-200 rounded-lg p-2"
              activeClassName="bg-gray-100"
            >
              <Person person={people[chat.personId] as IPerson} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export type ChatSidebarProps = React.HTMLAttributes<HTMLDivElement> & { hideSidebar: () => void };

export default ChatSidebar;
