import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  pokemon: Pokemon[] = [];
  title = "Glen's Pokemon Adventure made Exclusively for Blink UX";

  constructor(private pokeService : PokeService) { }

  ngOnInit() {
    this.getPokes();
  }

  getPokes(){
  this.pokeService.getPokes(this.pokemon.length, 9)
    .subscribe(pokemon => {
        console.log(pokemon);
        this.pokemon = pokemon;
      });    
  }

}
