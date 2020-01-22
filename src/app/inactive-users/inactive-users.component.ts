import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  // @Input()
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UserService) {

  }
  onSetToActive(id: number) {
    //   this.userSetToActive.emit(id);
    this.userService.setToActive(id);
  }


  ngOnInit() {
    this.users = this.userService.inactiveUser;
  }

}
