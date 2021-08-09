import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeAPIService } from 'src/app/service/poke-api.service'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  private urlPokemon: string = "https://api.pokemontcg.io/v2/cards/";

  public pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeAPIService: PokeAPIService
  ) { }

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon(){
    const id = this.activatedRoute.snapshot.params["id"];
    const pokemon = this.pokeAPIService.apiGetPokemons(`${this.urlPokemon}/${id}`);

    return forkJoin([pokemon]).subscribe(
      res => this.pokemon = res[0].data
    )
  }
}
