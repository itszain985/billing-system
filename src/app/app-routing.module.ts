import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingFormComponent } from './billing-form/billing-form.component';
import { PdfContentComponent } from './pdf-content/pdf-content.component';
import { InvoiceManuallyComponent } from './invoice-manually/invoice-manually.component';

const routes: Routes = [
  {path:'form',component:BillingFormComponent},
  {path:'pdf',component:PdfContentComponent},
  {path:'invoice',component:InvoiceManuallyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
