import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../models/users';

@Pipe({
  name: 'searchUsers',
})
export class SearchUsersPipe implements PipeTransform {
  transform(users: IUser[], search: string): IUser[] {
    return users.filter((user) =>
      user.login.toLowerCase().includes(search.toLowerCase())
    );
  }
}
