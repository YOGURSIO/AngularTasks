import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCardComponent } from './new-card/new-card.component';
import { GeneralCardComponent } from './general-card/general-card.component';
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCardComponent,
    GeneralCardComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
