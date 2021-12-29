import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  moviesData: any;
  movieData: any;
  search!:string;
  info = false;
  // TODO : à passer en variable d'env pour la cacher
  key: string = "2d0a0885";

  constructor() { }

  ngOnInit(): void {
  }

  searchMovie(): void {
    this.getMoviesData('s=' + this.search);
  }

  movieInfo(id:any): void {
    this.getMovieData('i=' + id);
    this.info = true;
  }

  getMoviesData(search: string): void{
    fetch(`http://www.omdbapi.com/?${search}&apikey=${this.key}`) 
    .then(response=>response.json())
    .then(res=>{this.setMoviesData(res.Search);}) 
  }

  getMovieData(search: string): void{
    fetch(`http://www.omdbapi.com/?${search}&apikey=${this.key}`) 
    .then(response=>response.json())
    .then(res=>{this.setMovieData(res);}) 
  }

  setMoviesData(data:any): void{
    this.moviesData = data;
    console.log(this.moviesData);
  }

  setMovieData(data:any): void{
    this.movieData = data;
    console.log(this.movieData);
  }
}
