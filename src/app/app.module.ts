import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './candidat/item.component';
import { RecrutedComponent } from './recruted/recruted.component';
import { InfoComponent } from './info/info.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ORANGE_ROUTING } from './app.routing';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
 import { UpdateComponent } from './update/update.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CvComponent,
    DetailComponent,
    RecrutedComponent,
    InfoComponent,
    ServersComponent,
    MsWordComponent,
    NavbarComponent,
    AddComponent,
    UpdateComponent
   ],
  imports: [
    BrowserModule,ORANGE_ROUTING, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
