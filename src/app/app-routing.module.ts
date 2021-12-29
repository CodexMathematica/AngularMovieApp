import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchMoviesComponent } from './pages/search-movies/search-movies.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchMoviesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'comment', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
