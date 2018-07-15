import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { SubFormsComponent } from './components/sub-forms/sub-forms.component';
import { FormsService } from './services/forms.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FormComponent, SubFormsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [FormsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
