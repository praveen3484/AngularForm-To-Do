import { Component } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  visible=true;
  counter=0;
   statuslist = {
    'status': ['Active', 'In-Active', 'Critical']
  }

createForm=false;
createButton=true;
third=false;
  FormFunction()
  {
    this.visible=!this.visible;
    this.counter++;
    this.createForm=!this.createForm;
    this.createButton=!this.createButton;
    
  }
  toggleCreate()
  {
    this.createForm=!this.createForm;
  this.visible=!this.visible;
    this.counter++;
       this.third=!this.third;
    
  }
  toggleDelete(){
    this.visible=!this.visible;
    this.counter++;
    this.createForm=!this.createForm;
       
    this.createButton=!this.createButton;
  }
  toggleDelete1(){
    this.visible=!this.visible;
    this.counter++;
    this.createForm=!this.createForm;
    this.third=!this.third;
   this.createButton=!this.createButton;
  }
  toggleUpdate(){
       this.createForm=!this.createForm;
       this.visible=!this.visible;
       this.counter++;
       this.third=!this.third;
  }

}
