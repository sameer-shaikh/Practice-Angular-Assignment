import { Component } from '@angular/core';
import { of } from 'rxjs';
import { UserService } from './user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];

  // onIntervalFired(firedValue: number){
  //   console.log(firedValue);
  //   if(firedValue % 2 === 0){
  //     this.evenNumbers.push(firedValue);
  //   }
  //   else{
  //     this.oddNumbers.push(firedValue);
  //   }
  // }

  // Assignment before services
  // Services Assignment

  // activeUsers = [];
  // inactiveUser = [];


  //  onSetToActive(id: number) {
  //     this.activeUsers.push(this.inactiveUser[id]);
  //     this.inactiveUser.splice(id, 1);
  // }

  // onSetToInactive(id: number) {
  //     this.inactiveUser.push(this.activeUsers[id]);
  //     this.activeUsers.splice(id, 1);
  // }
  

}

