import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfContentComponent } from './pdf-content/pdf-content.component';
import { BillingFormComponent } from './billing-form/billing-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceManuallyComponent } from './invoice-manually/invoice-manually.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    PdfContentComponent,
    BillingFormComponent,
    InvoiceManuallyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
