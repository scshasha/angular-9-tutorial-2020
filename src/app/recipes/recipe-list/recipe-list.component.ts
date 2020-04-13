import { Component, OnInit } from '@angular/core';


import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Crumbly mielie meal with Amasi", "Crumbly mielie meal with Amasi is a South African summer dish, especially common to the Xhosa people.", "https://images.rove.me/w_740,q_85/nbpzg8zcrttoqjkoyabe/south-africa-phutu-umphokoqo.jpg"),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
