import { Component } from '@angular/core';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-grand-child',
  template: `
    <p>GrandChildComponent <strong>{{animalService.emoji}}</strong></p>
  `,
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent {
  constructor(public animalService: AnimalService) {}
}
