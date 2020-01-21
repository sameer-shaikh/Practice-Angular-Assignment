import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedValue: number){
    console.log(firedValue);
    if(firedValue % 2 === 0){
      this.evenNumbers.push(firedValue);
    }
    else{
      this.oddNumbers.push(firedValue);
    }
  } 
}
