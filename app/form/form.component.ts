import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  firstName?:string
  lastName?:string
  email?:string

  @ViewChild("form") form?:NgForm
  onSubmit(form:NgForm):void{
    console.log(form.value)
  }
  
}
