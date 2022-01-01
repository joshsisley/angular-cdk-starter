import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { api, DataServiceError } from '../config';

@Injectable()
export class UserDataService {
  constructor(private http: HttpClient) {}

  getUser(id: string): Observable<any> {
    return this.http.get(`${api}/users/${id}`).pipe(
      delay(1000),
      map((data) => data),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('Failed to get user'));
      })
    );
  }
}
