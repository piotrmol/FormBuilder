import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { SubFormsComponent } from './components/sub-forms/sub-forms.component';
import { FormsService } from './services/forms.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { PreviewComponent } from './components/preview/preview.component';
import { ExportFormComponent } from './components/export-form/export-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { SubInputPreviewComponent } from './components/sub-input-preview/sub-input-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SubFormsComponent,
    PreviewComponent,
    ExportFormComponent,
    SubInputPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule
  ],
  providers: [FormsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
