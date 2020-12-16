import * as React from 'react';
import { render } from '@testing-library/react';
import Person from '../../src/components/people/Person';
import { IPerson } from '../../src/types/person.type';

describe('Person Component', () => {
  const person: IPerson = {
    id: 'Person',
    name: 'Person Name',
    email: 'person@gmail.com',
    imageUrl: 'https://placehold.it/200',
    phone: '8510052301',
  };

  it('renders person details', () => {
    const { queryByText, queryByAltText } = render(<Person person={person} />);

    expect(queryByText(person.name)).toBeInTheDocument();
    expect(queryByText(person.email)).toBeInTheDocument();
    expect(queryByAltText(person.name)).toHaveAttribute('src', person.imageUrl);
  });
});
