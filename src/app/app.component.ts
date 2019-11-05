import { Component, ChangeDetectionStrategy } from '@angular/core';
import { queryInnerAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [queryInnerAnimation]
})
export class AppComponent {}
