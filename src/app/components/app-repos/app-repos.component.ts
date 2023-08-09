import { Component, Input } from '@angular/core';
import { IRepos } from 'src/app/models/repos';

@Component({
  selector: 'app-repos',
  templateUrl: './app-repos.component.html',
  styleUrls: ['./app-repos.component.css'],
})
export class AppReposComponent {
  @Input() repo: IRepos;
}
