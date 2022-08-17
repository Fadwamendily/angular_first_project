import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RecrutedService {
recruteds=[];
  constructor() { }


  addRecrue(newRecrue) {
    if (this.recruteds.indexOf(newRecrue) == -1) ///the element doesn't exist in the table 
      this.recruteds.push(newRecrue);
    else alert('Cette personne a déjà été recrutée !');
  }
}
