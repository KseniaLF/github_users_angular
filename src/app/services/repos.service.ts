import { ErrorService } from './error.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IRepos } from '../models/repos';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getRepos(): Observable<IRepos[]> {
    return this.http
      .get<IRepos[]>('https://api.github.com/users/mojombo/repos')
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
