import { ErrorService } from './error.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // constructor(private http: HttpClient, private errorService: ErrorService) {}

  async getAll() {
    const data = await fetch('https://api.github.com/users');
    return (await data.json()) ?? {};
    // return [
    //   {
    //     login: 'string',
    //     id: 123,
    //     avatar_url: 'string',
    //   },
    //   {
    //     login: 'string',
    //     id: 5,
    //     avatar_url: 'string',
    //   },
    // ];
  }

  async getUsersbyUsername(username: string) {
    const data = await fetch(
      `https://api.github.com/search/users?q=${username}`
    );
    return (await data.json()) ?? {};
  }

  async getRepos(login: string) {
    const data = await fetch(`https://api.github.com/users/${login}/repos`);
    return (await data.json()) ?? {};
    // return [
    //   {
    //     name: 'string',
    //     description: 'string',
    //     language: 'string',
    //     has_issues: true,
    //     html_url: 'string',
    //   },
    // ];
  }

  // private errorHandler(error: HttpErrorResponse) {
  //   this.errorService.handle(error.message);
  //   return throwError(() => error.message);
  // }
}
