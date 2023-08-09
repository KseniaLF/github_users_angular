import { UsersService } from 'src/app/services/users.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRepos } from 'src/app/models/repos';

@Component({
  selector: 'app-repos-page',
  templateUrl: './repos-page.component.html',
  styleUrls: ['./repos-page.component.css'],
})
export class ReposPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  loading = true;
  repos: IRepos[] = [];

  usersService = inject(UsersService);

  constructor() {
    const login = this.route.snapshot.params['login'];

    this.usersService
      .getRepos(login)
      .then((data) => {
        this.repos = data;
      })
      .finally(() => (this.loading = false));
  }
}
