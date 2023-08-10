import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  @Input() user: IUser;
}
