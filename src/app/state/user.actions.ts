import { createAction, props } from '@ngrx/store';
import { User } from '../data/types/user';

export const setUser = createAction('[User] Set User', props<{ User: User }>());

export const updateUser = createAction(
  '[User] Update User',
  props<{ User: User }>()
);

export const removeUser = createAction('[User] Remove User', props<{ User: User }>())
