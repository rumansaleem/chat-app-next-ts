import { AppState } from '..';
import { peopleEntitySelectors } from './people.reducer';
import { IPerson, People } from '../../types/person.type';
import { Dictionary } from '@reduxjs/toolkit';

export const selectAllPeople = (state: AppState): People => {
  return peopleEntitySelectors.selectAll(state);
};

export const selectAllPeopleEntities = (state: AppState): Dictionary<IPerson> => {
  return peopleEntitySelectors.selectEntities(state);
};

export const selectPersonById = (personId: string) => (state: AppState): IPerson | undefined => {
  return peopleEntitySelectors.selectById(state, personId);
};
