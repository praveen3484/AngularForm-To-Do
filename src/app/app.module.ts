import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BsDropdownModule.forRoot(),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//

// import { Project } from "./app";
// import {FormsModule} from '@angular/forms';


// export class AppComponent {
//  value:false;
//  name:string='';
//  description:string='';
//  status:string='';

//  Falo:Array<Project>=[];

// show:false;


//  Output()
// {
// this.Falo.push(new Project(this.name,this.description,this.status)).form.reset();
// }

// Del()
// {
//   this.Falo.pop()

// }

// }
