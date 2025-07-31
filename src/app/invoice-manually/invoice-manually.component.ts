import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BillingServiceService } from '../billing/billing-service.service';



@Component({
  selector: 'app-invoice-manually',
  templateUrl: './invoice-manually.component.html',
  styleUrls: ['./invoice-manually.component.css']
})
export class InvoiceManuallyComponent {
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;
  public showModal = false;
  constructor(private billingService: BillingServiceService) {

  }

  
  user = {
    name: '',
    email: '',
    address: '',
    profileImageUrl: '',
    phoneNo: '',
  };

  payment = {
    issueDate: '',
    lastDate: '',
    amountDue: 0,
    lateFee: 0
  };

  onPhoneNumberSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedValue = input.value;
    const phoneNumber = selectedValue.split('-')[0];
    this.user.phoneNo = phoneNumber;
  }
  


  invoiceGenerated = false;
  
  formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  generateInvoice() {
    this.invoiceGenerated = true;
    
  }

  
  editDetails() {
    this.invoiceGenerated = false;
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.profileImageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }



  confirm(){
    this.showModal = true
  }
  closeConfirmationModal(){
    this.showModal = false
  }

  confirmDownload(status:any){
    if(status == 'yes'){
      this.downloadInvoice()
      this.showModal = false
    }else if(status == 'no'){
      this.showModal = false
    }
  }
  downloadInvoice() {
    
    const pdfContent = this.pdfContent?.nativeElement;

    html2canvas(pdfContent).then(canvas => {
      
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;

      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('invoice.pdf');
    });
  }


  reminder(name: any, email: any, amountDue: any, lastDate: any) {
    const userDetail = {
      name: name,
      email: email,
      amountDue: amountDue,
      lastDate: lastDate
    };
  
    const pdfContent = this.pdfContent?.nativeElement;
  
    html2canvas(pdfContent).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      const pdfData = pdf.output('blob');
  
      this.billingService.sendReminderWithPDF(userDetail, pdfData).subscribe((res: any) => {
        if (res.message == 'SUCCESS') {
          alert('Reminder sent successfully');
        }
      });
    });
  }
  
  
}








































