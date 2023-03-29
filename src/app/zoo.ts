import { InjectionToken } from "@angular/core";
import { AnimalService } from "./services/animal.service";

export const zoo = new InjectionToken<AnimalService[]>('zoo');
