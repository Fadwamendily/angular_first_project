import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
public selectedCandidat;

     constructor() { }
  ngOnInit(): void {
  }



}
