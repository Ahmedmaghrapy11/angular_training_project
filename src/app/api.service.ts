import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private request:HttpClient) { }

  getNowPlayingMovies():Observable<any> {
    let response = this.request.get("https://api.themoviedb.org/3/movie/now_playing?api_key=68b138595bee8123b5612bedeea4d299&language=en-US&page=1");
    return response;
  }

  getMovieDetail(id:number):Observable<any> {
    return this.request.get(`https://api.themoviedb.org/3/movie/${id}?api_key=68b138595bee8123b5612bedeea4d299&language=en-US`);
  }

}
