import { Directive } from '@angular/core';
import { AnimalService } from './services/animal.service';

@Directive({
  selector: '[appMonkey]',
  providers: [
    { provide: AnimalService, useValue: { emoji: 'monkey' } }
  ]
})
export class MonkeyDirective {

  constructor() { }

}
