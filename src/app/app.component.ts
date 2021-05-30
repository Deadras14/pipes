import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  
  onNameChange(event: any){
    const value = event.target.value;
    this.name = value;
  }
}
