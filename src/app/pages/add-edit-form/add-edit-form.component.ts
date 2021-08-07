import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { capitalize } from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { UserConfigService } from 'src/app/user-config.service';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {
  breadcrumbList = ['Home','', 'Update'];
  i18n: any;
  formsConfig:any;
  userConfigSub$!: Subscription;
  pageName:string='';
  constructor(private userService: UserConfigService,private route: ActivatedRoute,
    private http:HttpClient,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pageName = String(params.get('name'));
      if(!this.pageName) return;
      this.userConfigSub$ = this.userService.userCast.subscribe((userDetails: any) => {
        if (userDetails.appName) {
          if( this.userConfigSub$)
          this.userConfigSub$.unsubscribe();
          this.i18n = userDetails.i18n[0].translations;
          this.breadcrumbList[1] = capitalize(this.pageName)
          this.fetchData();
        }
      });
    }) 
  }

  fetchData(){
    this.http.get(`/config/formsConfig.json`).subscribe((res:any)=>{
     this.formsConfig = res[this.pageName];
     this.spinner.hide();
    })
  }

  onSubmit(event:any){
    this.spinner.show();
    this.http.post(`/api/${this.pageName}`,event).subscribe(res=>{
      this.spinner.hide();
      window.history.back();
    })
  }

}
