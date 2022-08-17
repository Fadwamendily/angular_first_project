import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
 info:Candidat
  constructor( private actRoute: ActivatedRoute,
    private candSer: CandidatService,private router:Router) { }

    ngOnInit(): void {
      //this.myId = this.actRoute.snapshot.paramMap.get('id');
      //this.myId = this.actRoute.snapshot.params['id'];
  
      this.actRoute.paramMap.subscribe({
        next: (p: ParamMap) => {
          this.info = this.candSer.getCandidatById(p.get('id'));
        },
      });
    }
    deleteCandidatById(p){
      if (confirm('etes vous sure?')){
      this.candSer.deleteCandidatById(p);
      this.router.navigateByUrl('/cv')}
      }

}
