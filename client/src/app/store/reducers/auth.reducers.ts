import * as AuthActions from '../actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface AuthState {
  isAuthenticated: boolean;
}

export const authInitialState: AuthState = {
  isAuthenticated: false,
};

const reducer = createReducer(
  authInitialState,
  on(AuthActions.authLogin, (state) => ({ ...state, isAuthenticated: true })),
  on(AuthActions.authLogout, (state) => ({ ...state, isAuthenticated: false }))
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return reducer(state, action);
}
