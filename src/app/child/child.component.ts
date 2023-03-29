import { Component } from '@angular/core';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-child',
  template: `
    <ng-content></ng-content>  <!-- принимает ссылку на родительский template -->
    <p>ChildComponent <strong>{{animalService.emoji}}</strong></p>
    <app-grand-child></app-grand-child>
  `,
  styleUrls: ['./child.component.css'],
  providers: [ // провайдит во всё, включая ng-content
    { provide: AnimalService, useValue: { emoji: 'fox' } } // отработает для ng-content, но не для view
  ], // viewProviders > monkeyDirective > providers
  viewProviders: [ // провайдит только в свой шаблон и в своих детей
    { provide: AnimalService, useValue: { emoji: 'кенгуру' } }
  ]
})
export class ChildComponent {
  constructor(public animalService: AnimalService) {}
}
