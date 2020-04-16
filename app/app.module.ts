import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidComponent } from './covid/covid.component';

import { HttpClientModule  } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
