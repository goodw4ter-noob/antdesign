import { Directive } from '@angular/core';
import { AnimalService } from './services/animal.service';

@Directive({
  selector: '[appCat]',
  providers: [
    { provide: AnimalService, useValue: { emoji: 'cat' } }
  ]
})
export class CatDirective {

  constructor() { }

}
