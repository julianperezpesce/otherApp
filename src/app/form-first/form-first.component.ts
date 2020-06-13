import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status: string = 'Form not submitted';
  defaultName: string = 'Julian';

  constructor() { }

  ngOnInit(): void {
  }

  onSendForm(){
    alert('Formulario enviado');
    
    this.status = 'Form submitted';
  }

  onDefaultForm(){
    this.defaultName = 'Alberto';
  }

}
