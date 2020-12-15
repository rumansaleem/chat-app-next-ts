import * as React from 'react';
import { CgChevronDoubleLeft, CgClose, CgCross } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { selectAllPeople } from '../../state/people/people.reducer';
import { People } from '../../types/person.type';
import Person from '../people/Person';

const ChatSidebar: React.FC<ChatSidebarProps> = ({ hideSidebar, className = '', ...props }) => {
  const { url } = useRouteMatch();
  const people: People = useSelector(selectAllPeople);

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
        {people.map((person) => (
          <li key={person.id}>
            <Link to={`${url}/${person.id}`} className="block hover:bg-gray-200 rounded-lg p-2">
              <Person person={person} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export type ChatSidebarProps = React.HTMLAttributes<HTMLDivElement> & { hideSidebar: () => void };

export default ChatSidebar;
