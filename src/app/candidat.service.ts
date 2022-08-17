import { Injectable } from '@angular/core';
import { CANDIDAT } from './mock-candidat';


@Injectable({
  providedIn: 'root'
})
export class CandidatService {
 private listCandidats = CANDIDAT
  constructor() { }
  getAllCandidats() {
    return this.listCandidats;
  }

  addCandidat(newC) {
    this.listCandidats.push(newC);
  }

  getCandidatById(id) {
    return this.listCandidats.find((c) => c._id == id);
  }
  deleteCandidatById(id) {
    this.listCandidats.splice( this.listCandidats.indexOf( this.listCandidats.find((c) => c._id == id)),1)
  }
 

/*   deleteCandidatById(Cand) {
    let i = this.listCandidats.indexOf(Cand);
    this.listCandidats.splice(i, 1);
  }

  deleteCandidatByIdV2(id) {
    this.listCandidats = this.listCandidats.filter((c) => c._id != id);
  } */

  updateCandidat(cand) {
    let i = this.listCandidats.indexOf(cand);
    this.listCandidats[i] = cand;
  }

}

