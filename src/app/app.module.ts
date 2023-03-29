import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ParallaxDirective } from './directives/parallax.directive';
import { AnimalService } from './services/animal.service';
import { ParrotModule } from './parrot/parrot.module';
import { RoosterModule } from './rooster/rooster.module';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    ChildComponent,
    GrandChildComponent,
  ],
  imports: [
    BrowserModule,
    RoosterModule, //2
    ParrotModule,  //1
  ],
  providers: [
    // { provide: AnimalService, useValue: { emoji: 'pinguin' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AppModule > prodiveIn: 'root'
// AppModule > ParrotModule | RoosterModule

// @Component наследуется от @Directive
