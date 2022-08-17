import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../candidat';
import { CANDIDAT } from '../mock-candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  selectedCandidat?={};
  candidats=CANDIDAT
  oneCandidat
  @Output() msgToCV = new EventEmitter();
  @Input() candidatDetails
  ;
  constructor() { }
  ngOnInit(): void {
  }

  onSelect(candidat):void{
    this.selectedCandidat=candidat;
    this.msgToCV.emit(this.selectedCandidat)
    console.log("selected",this.selectedCandidat)

  }

}