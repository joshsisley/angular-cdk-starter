import { ActionReducerMap } from '@ngrx/store';
import * as UserReducers from './user.reducer';
import * as AuthReducers from './auth.reducers';

export const reducers: any[] = [UserReducers, AuthReducers];

export * from './user.reducer';
export * from './auth.reducers';
