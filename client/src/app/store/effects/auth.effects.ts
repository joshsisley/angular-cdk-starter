import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { AuthService } from '..';
import * as AuthActions from '../actions';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authLogin),
      switchMap((action) =>
        this.auth.login(action.username, action.password).pipe(
          map((data) => AuthActions.authLoginSuccess({ token: data.token })),
          catchError((error) => of(AuthActions.authLoginError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private auth: AuthService) {}
}
