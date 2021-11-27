import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MasterService } from 'src/app/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formsConfig = [
    {
      "element_type": "textBox",
      "label": "email",
      "name": "email",
      "class": "col-lg-12",
      "placeholder": "name",
      "type": "text",
      "required": true
    },
    {
      "element_type": "textBox",
      "label": "password",
      "name": "password",
      "class": "col-lg-12",
      "placeholder": "address",
      "type": "password",
      "required": true
    }
  ];
  showCancel = false;

  constructor(private spinner: NgxSpinnerService, private router:Router,private masterService:MasterService) { }

  ngOnInit(): void {
    this.spinner.hide();
    if (localStorage.getItem('isLoggedin')) {
      this.router.navigateByUrl('/page')
    }
  }

  onSubmit({email,password}:any){
    this.spinner.show();
    this.masterService.login(email,password).subscribe((res:any) => {
      console.log(res)
        const userDetails = res?.data?.login;
        if(userDetails){
          localStorage.setItem('token',userDetails['token']);
          localStorage.setItem('userDetails',JSON.stringify(userDetails));
          localStorage.setItem('isLoggedin', 'true');
        }
      this.router.navigateByUrl('/page');
      this.spinner.hide();
    }, (error) => {
      this.spinner.hide();
      console.log('there was an error sending the query', error);
    });
  }

}
