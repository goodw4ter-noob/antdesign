import { Component } from '@angular/core';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-child',
  template: `
    <p>ChildComponent <strong>{{animalService.emoji}}</strong></p>
    <app-grand-child></app-grand-child>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  constructor(public animalService: AnimalService) {}
}
