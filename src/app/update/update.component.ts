import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editedCandidat;
constructor(
  private activatedRoute: ActivatedRoute,
  private router: Router,
  private candSer: CandidatService
) {}

ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe({
    next: (p) => {
      this.editedCandidat = this.candSer.getCandidatById(p.get('id'));
      console.log(this.editedCandidat);
    },
  });
}

updateCandidat() {
  console.log(this.editedCandidat);
  this.candSer.updateCandidat(this.editedCandidat);
  this.router.navigateByUrl('/cv');
}
}