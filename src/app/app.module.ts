import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { WhatWeDoSectionComponent } from './what-we-do-section/what-we-do-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsSectionComponent,
    WhatWeDoSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
