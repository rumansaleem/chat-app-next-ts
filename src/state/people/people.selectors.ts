import { AppState } from '..';
import { peopleEntitySelectors } from './people.reducer';
import { IPerson, People } from '../../types/person.type';

export const selectAllPeople = (state: AppState): People => {
  return peopleEntitySelectors.selectAll(state);
};

export const selectPersonById = (personId: string) => (state: AppState): IPerson | undefined => {
  return peopleEntitySelectors.selectById(state, personId);
};
