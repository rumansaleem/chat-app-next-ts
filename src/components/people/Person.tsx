import * as React from 'react';
import { CgChevronRight } from 'react-icons/cg';
import { IPerson } from '../../types/person.type';

const Person: React.FC<PersonListItemProps> = ({ person, className = '', ...props }) => {
  return (
    <div {...props} className={`relative flex items-center space-x-4 ${className}`}>
      <img src={person.imageUrl} alt={person.name} className="w-12 h-12 rounded-full" />
      <div>
        <h4 className="leading-5 font-bold text-gray-800">{person.name}</h4>
        <p className="text-sm text-gray-600">{person.email}</p>
      </div>
      <div className="absolute transform right-2 top-1/2 -translate-y-1/2">
        <CgChevronRight />
      </div>
    </div>
  );
};

export interface PersonListItemProps extends React.LiHTMLAttributes<HTMLDivElement> {
  person: IPerson;
}

export default Person;
