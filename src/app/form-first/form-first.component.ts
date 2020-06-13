import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status: string = 'Form not submitted';
  defaultName: string = 'Julian';
  user: string = '';
  displayPassword: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSendForm(email){
    alert(email);
    console.log(email);
    
    
    this.status = 'Form submitted';
  }

  onDefaultForm(){
    this.defaultName = 'Alberto';
   
  }

  onShowPassword(){
    this.displayPassword = true;
  }

}
