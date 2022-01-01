import { ActionReducerMap } from '@ngrx/store';
import * as UserReducers from './user.reducer';

export const reducers: any[] = [UserReducers];

export * from './user.reducer';
