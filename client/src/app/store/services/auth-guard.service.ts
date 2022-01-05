import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';

import { selectIsAuthenticated } from '../selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate() {
    return this.store.pipe(
      select(selectIsAuthenticated),
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
