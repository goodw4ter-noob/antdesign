import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../services/animal.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: AnimalService, useValue: { emoji: 'rooster' } }
  ]
})
export class RoosterModule { }
