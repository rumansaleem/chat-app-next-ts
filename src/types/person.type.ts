import { EntityState } from '@reduxjs/toolkit';

export interface IPerson {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
}

export type People = IPerson[];
export interface PeopleState extends EntityState<IPerson> {
  isLoading: boolean;
  errorMessage: string | null;
}
