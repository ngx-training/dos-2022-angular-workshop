import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './posts/detail/detail.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CreateFormComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: ':id',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
