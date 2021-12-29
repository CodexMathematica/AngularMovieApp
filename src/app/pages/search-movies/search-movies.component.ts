import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  apiData: any;
  search!:string;
  // TODO : à passer en variable d'env pour la cacher
  key: string = "2d0a0885";

  constructor() { }

  ngOnInit(): void {
  }

  searchMovie(): void {
    this.getApiData(this.search);
  }

  getApiData(search: string): void{
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=${this.key}`) 
    .then(response=>response.json())
    .then(res=>{this.setApiData(res.Search);}) 
  }

  setApiData(data:any): void{
    this.apiData = data;
    console.log(this.apiData);
  }
}
