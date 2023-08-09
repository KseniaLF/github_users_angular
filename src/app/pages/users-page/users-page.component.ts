import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  title = 'github users';
  // users: IUser[] = [];
  loading = false;
  term = '';

  users$: Observable<IUser[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loading = true;

    this.users$ = this.usersService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
    // this.loading = true;
    // this.usersService.getAll().subscribe((users) => {
    //   this.users = users;
    //   this.loading = false;
    // });
  }
}
