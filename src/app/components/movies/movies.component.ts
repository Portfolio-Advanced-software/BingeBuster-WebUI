import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  movies!:Movie[];

  constructor() {}

  ngOnInit(): void {
    this.movies = [
      {
        name: 'Avengers',
        year: 2020
      },
      {
        name: 'Scarface',
        year: 1997
      }
    ]
  }

}
