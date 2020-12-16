import { Action } from 'redux';
import { People } from '../../types/person.type';

export enum PeopleActionTypes {
  LOAD_PEOPLE = '[Load] People',
  LOAD_PEOPLE_SUCCESS = '[Load] People Success',
  LOAD_PEOPLE_FAILED = '[Load] People Failed',
}

export class LoadPeople implements Action<PeopleActionTypes> {
  readonly type = PeopleActionTypes.LOAD_PEOPLE;
}

export class LoadPeopleSuccess implements Action<PeopleActionTypes> {
  readonly type = PeopleActionTypes.LOAD_PEOPLE_SUCCESS;
  constructor(public payload: { people: People }) {}
}

export class LoadPeopleFailed implements Action<PeopleActionTypes> {
  readonly type = PeopleActionTypes.LOAD_PEOPLE_FAILED;
  constructor(public payload: { error: unknown }) {}
}

export type PeopleActions = LoadPeople | LoadPeopleSuccess | LoadPeopleFailed;
