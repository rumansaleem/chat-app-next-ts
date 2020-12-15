import { Action } from 'redux';
import { People } from '../../types/person.type';

export enum PeopleActionTypes {
  LOAD_PEOPLE = '[Load] People',
  LOAD_PEOPLE_SUCCESS = '[Load] People Success',
  LOAD_PEOPLE_FAILED = '[Load] People Failed',
}

export interface LoadPeople extends Action<PeopleActionTypes> {
  type: PeopleActionTypes.LOAD_PEOPLE;
}

export interface LoadPeopleSuceess extends Action<PeopleActionTypes> {
  type: PeopleActionTypes.LOAD_PEOPLE_SUCCESS;
  payload: { people: People };
}

export interface LoadPeopleFailed extends Action<PeopleActionTypes> {
  type: PeopleActionTypes.LOAD_PEOPLE_FAILED;
  payload: { error: unknown };
}

export type PeopleActions = LoadPeople | LoadPeopleSuceess | LoadPeopleFailed;
