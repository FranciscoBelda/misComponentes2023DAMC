import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente} from "../common/interfaces";
import {Usuario} from "../common/usuario";
import {ApiPeliculas} from "../common/peliculas";
import {environment} from "../../environments/environment";
import {Post} from "../common/Post";
import {Album} from "../common/Album";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getComponente(): Observable<Componente[]>{
    return this.http.get<Componente[]>(
      '/assets/data/menu.json');
  }
  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(
      'https://jsonplaceholder.typicode.com/users');
  }

  loadMovies(page: number): Observable<ApiPeliculas>{
    return this.http.get<ApiPeliculas>(
      environment.baseUrl+'/movie/popular?api_key='+
      environment.apiKey+'&page='+page);
  }
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }
}
