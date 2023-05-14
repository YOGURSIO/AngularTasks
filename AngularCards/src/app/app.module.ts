import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCardComponent } from './new-card/new-card.component';
import { GeneralCardComponent } from './general-card/general-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCardComponent,
    GeneralCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
