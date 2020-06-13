import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../course.service';

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
  lightStatus: string = 'red';
  names: string[] = ['Julian', 'Alberto', 'Maria', 'Polo'];

  //@Input() parentDataToChild;
  @Input('parentDataToChild') messageFromParent;
  @Output() childEvent = new EventEmitter();
  courses = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    console.log(this.courses);
    
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

  onSendEvent(){
    this.childEvent.emit('Evento desde hijo a Padre');
  }

}
