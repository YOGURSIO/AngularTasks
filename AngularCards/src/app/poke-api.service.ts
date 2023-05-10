import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {


  constructor() { }

  async getPokemonImgByName(pkName: string) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkName.trim()}`);
    const pokemon = await response.json();
    return pokemon.sprites.front_default;
  }


}
