import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _ApiService:ApiService) { }

  moviesContainer:any;

  ngOnInit(): void {
    let x = this._ApiService.getNowPlayingMovies().subscribe({
        next:
          (res) => {console.log(res.results),
            this.moviesContainer = res.results;},
        error:
          (error) => {console.log(error)}
      });
    // console.log(x);
  }

}
