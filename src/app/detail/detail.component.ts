import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from '../candidat';
import { RecrutedService } from '../recruted.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input()  candidatDetails;
moreInfo
  constructor(private recSer:RecrutedService , private router:Router) { }
  ngOnInit(): void {

  }
  
  addNewRecrue() {
    this.recSer.addRecrue(this.candidatDetails);
  }
  showdetails(){
    this.moreInfo=this.candidatDetails;
    this.router.navigate(['/cv',this.candidatDetails['_id']])
  } 
}
