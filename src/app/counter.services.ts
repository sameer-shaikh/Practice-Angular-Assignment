
export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToInactiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log(this.activeToInactiveCounter);
    }

    incrementInactiveToInactive() {
        this.inactiveToInactiveCounter++;
        console.log(this.inactiveToInactiveCounter);
    }
}
