import { AppState } from '..';
import { IPerson, People } from '../../types/person.type';

export const selectAllPeople = (state: AppState): People => {
  return state.people.personIds.map((id) => state.people.all[id]);
};

export const selectPersonById = (personId: string) => (state: AppState): IPerson | null => {
  return state.people.all[personId];
};
