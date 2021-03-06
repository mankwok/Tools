import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app-components/home/home.component';
import { AboutComponent } from '@app-components/about/about.component';
import { LoginComponent } from '@app-components/login/login.component';
import { ErrorComponent } from '@app-components/error/error.component';
import { AuthGuard } from '@app-core/auth.guard';
import { NotAuthGuard } from '@app-core/not-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'todo',
    loadChildren: '@app-routes/todo/todo.module#TodoModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
    canActivate: [NotAuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent,
    data: { title: 'Page Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
