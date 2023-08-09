import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from './models/users';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'github users';
  // users: IUser[] = [];
  loading = false;

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
