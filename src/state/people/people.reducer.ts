import { IPerson, People, PeopleState } from '../../types/person.type';
import { stringifyError } from '../../utils/stringifiers';
import { PeopleActions, PeopleActionTypes } from './people.actions';
import { createEntityAdapter, EntityAdapter } from '@reduxjs/toolkit';
import { AppState } from '..';

export const peopleReducerKey = 'people';

export const peopleAdapter: EntityAdapter<IPerson> = createEntityAdapter<IPerson>({
  selectId: (person: IPerson) => person.id,
});

const initialEntites: People = [
  {
    id: 'nmo',
    name: 'Narendra Modi',
    email: 'nmo@gmail.com',
    phone: '8510052301',
    imageUrl: 'https://placehold.it/128',
  },
  {
    id: 'ams',
    name: 'Amit Shah',
    email: 'amit.shah@gmail.com',
    phone: '8510052321',
    imageUrl: 'https://placehold.it/128',
  },
  {
    id: 'ank',
    name: 'Anupam Kher',
    email: 'kheranupam@gmail.com',
    phone: '8719502030',
    imageUrl: 'https://placehold.it/128',
  },
  {
    id: 'knr',
    name: 'Kangana Ranaut',
    email: 'kna@gmail.com',
    phone: '8890986543',
    imageUrl: 'https://placehold.it/128',
  },
];

const initialPeopleState: PeopleState = peopleAdapter.getInitialState({
  isLoading: false,
  errorMessage: '',
});

const seededPeopleState: PeopleState = peopleAdapter.setAll(initialPeopleState, initialEntites);

export function reducer(state = seededPeopleState, action: PeopleActions): PeopleState {
  switch (action.type) {
    case PeopleActionTypes.LOAD_PEOPLE:
      return { ...state, isLoading: true };
    case PeopleActionTypes.LOAD_PEOPLE_SUCCESS:
      return peopleAdapter.setAll({ ...state, isLoading: false }, action.payload.people);
    case PeopleActionTypes.LOAD_PEOPLE_FAILED:
      const errorMessage = stringifyError(action.payload.error, '[People Error]');
      return { ...state, isLoading: false, errorMessage };
    default:
      return state;
  }
}

export const peopleEntitySelectors = peopleAdapter.getSelectors((state: AppState) => state.people);
