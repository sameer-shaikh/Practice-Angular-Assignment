import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  // @Input()
  users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
   // this.onSetToInactive.emit(id);
    this.userService.setToInactive(id);
  }
}
