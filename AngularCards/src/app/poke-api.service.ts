import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {


  constructor() { }
  //Grab the image of a pokemon by name from the pokeapi
  async getPokemonImgByName(pkName: string) : Promise<Pokemon> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkName.trim().toLowerCase()}`);
    const pokemon = await response.json();
    return {
      sprites: {
        frontImgUrl: pokemon.sprites.front_default,
        backImgUrl: pokemon.sprites.back_default,
      }
    };
  }
}
