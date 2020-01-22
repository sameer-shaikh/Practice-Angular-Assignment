import { Injectable } from '@angular/core';
import { CounterService } from './counter.services';

@Injectable()
export class UserService {
    activeUsers = ['Sam', 'Well'];
    inactiveUser = ['Tyson', 'Max'];

    constructor(private counterService: CounterService) {}

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUser[id]);
        this.inactiveUser.splice(id, 1);
        this.counterService.incrementInactiveToInactive();
    }

    setToInactive(id: number) {
        this.inactiveUser.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementActiveToInactive();
    }
}
