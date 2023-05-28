import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDriversComponent } from './list-drivers/list-drivers.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailDriverComponent } from './detail-driver/detail-driver.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDriversComponent,
    DetailDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
