import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec1-ass3',
  templateUrl: './sec1-ass3.component.html',
  styleUrls: ['./sec1-ass3.component.css']
})
export class Sec1Ass3Component implements OnInit {
  showSecret = false;
  log = [];
  constructor() { }

  ngOnInit() {
  }

  onToggel(){
    this.log.push(Date());
  }
}
