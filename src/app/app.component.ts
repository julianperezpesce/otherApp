import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'otherApp';
  dataToChildFromParent: string = 'Mensaje para componente hijo';
  message = '';
}
