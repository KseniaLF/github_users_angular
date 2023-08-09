import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ReposPageComponent } from './pages/repos-page/repos-page.component';

const routes: Routes = [
  { path: '', component: UsersPageComponent },
  { path: 'repos', component: ReposPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
