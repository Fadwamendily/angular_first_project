import { Component, OnInit } from '@angular/core';
import { RecrutedService } from '../recruted.service';

@Component({
  selector: 'app-recruted',
  templateUrl: './recruted.component.html',
  styleUrls: ['./recruted.component.css']
})
export class RecrutedComponent implements OnInit {
  listRecrues = [];

  constructor( private recser:RecrutedService) { }

  ngOnInit(): void {
    this.listRecrues= this.recser.recruteds;
  }

}
