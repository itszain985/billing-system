import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pdf-content',
  templateUrl: './pdf-content.component.html',
  styleUrls: ['./pdf-content.component.css']
})
export class PdfContentComponent {
  rececivedDataFromService:any;
  // currentTime: any ;
  constructor(private sharedData:SharedService) {
    // this.currentTime = this.getCurrentTime();
    // const now = new Date();
  //  this.currentTime = datePipe.transform(now, 'MMM d, y, h:mm:ss a')
  }

  ngOnInit(){
    this.sharedData.currentData.subscribe((data:any) => {
      this.rececivedDataFromService = data
      console.log("PDF------COMPONENT",this.rececivedDataFromService)
    })
  }
  user = {
    profileImageUrl: ''
  };
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


  downloadPDF() {
    const data = document.getElementById('pdf-content');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('MYPdf.pdf');
      });
    }
  }
}