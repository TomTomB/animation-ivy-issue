import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotiHostComponent } from './noti-host/noti-host.component';
import { NotiComponent } from './noti/noti.component';

@NgModule({
  declarations: [AppComponent, NotiHostComponent, NotiComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
