import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefComponentComponent } from './def-component/def-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DefComponentComponent,
    RegistrationComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
