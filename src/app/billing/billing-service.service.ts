import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingServiceService {


  private baseUrl = 'http://localhost:5000/api/customRoutes';
  private nodemailer = 'http://localhost:5000/send-reminder'
  constructor(private http: HttpClient) { }


  getBill(data: any){
    return this.http.get(`${this.baseUrl}/get-bill/${data}`);
  }

  // sendReminderEmail(userDetail:any, pdfData: Blob){
  //   const formData = new FormData();
  //   formData.append('file', pdfData, 'invoice.pdf');
  //   formData.append('userData', JSON.stringify(userDetail));
  //   return this.http.post<any>(this.nodemailer, { formData });

  // }
  // sendReminderWithPDF(userDetail: any, pdfData: Blob) {
  //   const formData = new FormData();
  //   formData.append('file', pdfData, 'invoice.pdf');
  //   formData.append('userData', JSON.stringify(userDetail)); // Convert user data to JSON string
  
  //   return this.http.post('/api/send-reminder', formData);
  // }



  sendReminderWithPDF(userDetail: any, pdfData: Blob) {
    const formData = new FormData();
    formData.append('file', pdfData, 'invoice.pdf');
    formData.append('userData', JSON.stringify(userDetail)); // Convert user data to JSON string

    return this.http.post(`${this.nodemailer}`, formData);
  }
}
