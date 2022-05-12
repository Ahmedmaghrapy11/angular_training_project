import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {


  singleMovieDetail:any;
  recieved:boolean = false;

  constructor(private _ApiService:ApiService, private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    let movieId = this._ActivatedRoute.snapshot.params['x'];

    this._ApiService.getMovieDetail(movieId).subscribe({

      next: (data) => {
        this.singleMovieDetail = data;
        this.recieved = true;
      },

      error: () => {}
    });
  }

}
