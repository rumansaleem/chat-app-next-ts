import { AppState } from '..';
import { People, PeopleState } from '../../types/person.type';
import { PeopleActions, PeopleActionTypes } from './people.actions';

export const peopleReducerKey = 'people';

const initialPeopleList: People = [
  {
    id: 'rmn',
    name: 'Narendra Modi',
    email: 'nmo@gmail.com',
    phone: '8510052301',
    imageUrl: 'https://placehold.it/128',
  },
  {
    id: 'arb',
    name: 'Amit Shah',
    email: 'amit.shah@gmail.com',
    phone: '8510052321',
    imageUrl: 'https://placehold.it/128',
  },
  {
    id: 'tim',
    name: 'Anupam Kher',
    email: 'kheranupam@gmail.com',
    phone: '8719502030',
    imageUrl: 'https://placehold.it/128',
  },
  {
    id: 'kna',
    name: 'Kangana Ranaut',
    email: 'kna@gmail.com',
    phone: '8890986543',
    imageUrl: 'https://placehold.it/128',
  },
];

const initialPeopleState: PeopleState = {
  isLoading: false,
  errorMessage: '',
  all: initialPeopleList,
};

function stringifyError(error: unknown): string {
  if (error instanceof Error) {
    return `[People Error] ${error.name}: ${error.message}`;
  }

  return '[People Error] Unknown';
}

export function reducer(state = initialPeopleState, action: PeopleActions): PeopleState {
  switch (action.type) {
    case PeopleActionTypes.LOAD_PEOPLE:
      return { ...state, isLoading: true };
    case PeopleActionTypes.LOAD_PEOPLE_SUCCESS:
      return { ...state, all: action.payload.people, isLoading: false };
    case PeopleActionTypes.LOAD_PEOPLE_FAILED:
      return { ...state, isLoading: false, errorMessage: stringifyError(action.payload.error) };
    default:
      return state;
  }
}

export const selectAllPeople = (state: AppState): People => state.people.all;
