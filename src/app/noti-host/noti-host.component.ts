import { Component, OnInit } from '@angular/core';
import { queryInnerAnimation } from '../app.animations';

@Component({
  selector: 'app-noti-host',
  templateUrl: './noti-host.component.html',
  styleUrls: ['./noti-host.component.css'],
  animations: [queryInnerAnimation]
})
export class NotiHostComponent implements OnInit {
  testArray = [0, 1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit() {}

  rmOne() {
    this.testArray = this.testArray.splice(0, this.testArray.length - 1);
  }

  addOne() {
    this.testArray.push(1);
  }

  trackByFn(item: number) {
    return item;
  }
}
