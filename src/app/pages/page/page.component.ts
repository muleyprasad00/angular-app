import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Columns } from 'src/app/components/grid/column';
import { UserConfigService } from 'src/app/user-config.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  breadcrumbList = [];
  gridButtons = []
  columns:Columns[] = [];
  rowData:any = {};
  frameworkComponents:any;
  i18n: any;
  pageConfig:any;
  userConfigSub$!: Subscription;


  constructor(
    private userService: UserConfigService, 
    private router:Router,
    private http:HttpClient,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const name = params.get('name');
      if(!name) return;
      this.userConfigSub$ = this.userService.userCast.subscribe((userDetails: any) => {
        if (userDetails.appName) {
          if( this.userConfigSub$)
          this.userConfigSub$.unsubscribe();
          this.i18n = userDetails.i18n[0].translations;
          this.pageConfig = userDetails[name];
        }
      });
    })   
  }

  fetchData(apiUrl:string,title:string){
    this.http.get(`/api/${apiUrl}`).subscribe((res:any)=>{
      this.rowData[title] = res.result;
    })
  }

  onGridBtnClickEvent(event:any){    
    this.router.navigateByUrl(`/${event.url}`)
  }

}
