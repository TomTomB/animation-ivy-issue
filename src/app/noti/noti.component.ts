import { Component, OnInit } from '@angular/core';
import { RevealerAnimation } from '../app.animations';

@Component({
  selector: 'app-noti',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.css'],
  animations: [RevealerAnimation]
})
export class NotiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
