import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { capitalize } from 'lodash';
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
    private http:HttpClient,) { }

  ngOnInit(): void {
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
    this.http.get(`/api/formsConfig.json`).subscribe((res:any)=>{
     this.formsConfig = res[this.pageName]
    })
  }

}
