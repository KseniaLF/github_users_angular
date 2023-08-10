import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Observable,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { IUser } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  title = 'github users';
  users: IUser[] = [];
  loading: boolean = false;
  term: string = '';
  errorMessage: string = '';

  filterForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.usersService.getAll().then((data) => {
      this.users = data;
    });

    this.filterForm = this.fb.group({
      filter: [''],
    });
  }

  ngOnInit() {
    if (this.filterForm.get('filter')) {
      this.filterForm
        .get('filter')!
        .valueChanges.pipe(
          // filter((value) => value !== ''),
          debounceTime(1000),
          distinctUntilChanged(),
          switchMap((value) => this.filterResults(value)),
          catchError((err) => {
            this.errorMessage = `Something went wrong, try again. ${err.message}`;
            return throwError(err);
          })
        )

        .subscribe((results) => {
          this.errorMessage = '';
          console.log(results.items);
          this.users = results.items;
        });
    }
  }

  filterResults(value: string) {
    return this.usersService.getUsersbyUsername(value);
  }
}
