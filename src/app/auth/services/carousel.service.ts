import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  mensaje(palabra: string){
    console.log(palabra);
  }
}
