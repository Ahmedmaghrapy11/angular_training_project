import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NetworkComponent } from './network/network.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { PeopleComponent } from './people/people.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", redirectTo: "/register", pathMatch: "full"},
  {path: "movies", component: MoviesComponent},
  {path: "register", component: RegisterComponent},
  {path: "moviedetails/:x/:y", component: MovieDetailsComponent},
  {path: "about", component: AboutComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "network", component: NetworkComponent},
  {path: "people", component: PeopleComponent},
  {path: "tvshow", component: TvShowComponent},
  {path: "**", component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
