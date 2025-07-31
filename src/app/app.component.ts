import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billing-system';
  

  constructor(private router : Router){}

  navigation(info:any){
    if(info == 'pdf'){
      this.router.navigate(['/pdf'])
    }
    else if(info == 'form'){
      this.router.navigate(['/form'])
    }
  }
}
