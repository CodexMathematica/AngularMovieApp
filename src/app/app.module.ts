import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchMoviesComponent } from './pages/search-movies/search-movies.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { AboutComponent } from './pages/about/about.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchMoviesComponent,
    CommentsComponent,
    AboutComponent,
    MovieCardComponent,
    CommentCardComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
