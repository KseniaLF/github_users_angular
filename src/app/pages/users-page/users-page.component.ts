import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent {
  title = 'github users';
  users: IUser[] = [];
  loading = false;
  term = '';

  constructor(private usersService: UsersService) {
    this.usersService.getAll().then((data) => {
      this.users = data;
    });
  }

  filterResults(term: string) {
    if (!term) {
      this.term = this.term;
    }

    this.usersService.getUsersbyUsername(term).then((data) => {
      this.users = data.items;
    });

    // this.users = this.users.filter((user) =>
    //   user?.login.toLowerCase().includes(term.toLowerCase())
    // );
  }
}
