import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent {

 

  form: FormGroup = new FormGroup({
    username:new FormControl(''),
    company:new FormControl(''),
    dateInfo:new FormControl(''),
    lastDate:new FormControl('')
    // email:new FormControl(''),
    // password:new FormControl('')
  });
  submitted = false

  constructor(private formBuilder:FormBuilder , private sharedData:SharedService){}

  ngOnInit(): void{
    this.form = this.formBuilder.group(
      {
        username:[
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]
        ],
        company:[
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(40)
          ]
        ],
        dateInfo:[
          '',
          [
            Validators.required
          ]
        ],
        lastDate:[
          '',
          [
            Validators.required
          ]
        ]
        // email:[
        //   '',
        //   [
        //     Validators.required,Validators.email
        //   ]
        // ],
        // password:[
        //   '',
        //   [
        //     Validators.required,
        //     Validators.minLength(8),
        //     Validators.maxLength(20)
        //   ]
        // ]
      }
    )
  }

  get f(): {[key:string]:AbstractControl}{
    return this.form.controls
  }



  username:any;
  companyName:any;
  dateInfo:any;
  lastDate:any;



  onSubmit(): void {
    this.submitted = true;

    if(this.form.invalid){
      return;
    }
    console.log(JSON.stringify(this.form.value,null,2),'fffffffffffffffffffff');

    this.username = this.form.value.username
    this.companyName = this.form.value.company
    this.dateInfo = this.form.value.dateInfo
    this.lastDate = this.form.value.lastDate
    
    this.sharedData.changeData({
      'userName':this.username,
      'company':this.companyName,
      'dateInfo':this.dateInfo,
      'lastDate':this.lastDate
    })
    alert('Data Enter')
  }
}
