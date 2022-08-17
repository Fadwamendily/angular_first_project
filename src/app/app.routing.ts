import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { CvComponent } from "./cv/cv.component";
import { InfoComponent } from "./info/info.component";
import { UpdateComponent } from "./update/update.component";


  let myRoutes: Routes = [
   
    {
      path: 'cv',
      children: [
        { path: '', component: CvComponent },
        { path: 'add', component: AddComponent },
        { path: ':id', component: InfoComponent },
        { path: ':id/edit', component: UpdateComponent },
      ],
    },
  ]
    export const ORANGE_ROUTING = RouterModule.forRoot(myRoutes);