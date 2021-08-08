import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {


  private url: string = 'https://api.pokemontcg.io/v2/cards/?pageSize=16&count=16'
  constructor(
    private http: HttpClient
  ) {}

  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {console.log(res)})
    )
  }
}
