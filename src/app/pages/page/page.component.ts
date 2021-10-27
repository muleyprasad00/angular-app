import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Columns } from 'src/app/components/grid/column';
import { UserConfigService } from 'src/app/user-config.service';
import { Apollo, gql, QueryRef } from 'apollo-angular';

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
  pageName:string='';
  private query: QueryRef<any> | undefined;
  constructor(
    private userService: UserConfigService, 
    private router:Router,
    private http:HttpClient,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private apollo: Apollo
    ) { }

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
          this.pageConfig = userDetails[this.pageName];
          this.spinner.hide();
        }
      });
    })   
  }

  // fetchData(apiUrl: string, title: string) {
  //   this.spinner.show();
  //   this.http.get(`${apiUrl}`).subscribe((res: any) => {
  //     this.rowData[title] = res;
  //     this.spinner.hide();
  //   },
  //   (error:any) => {
  //     console.log(error)
  //     this.spinner.hide();
  //   })
  // }

  fetchData(queryConfig: any,columns:any=[], title: string) {
    const requireColumns = columns.map((item:any)=>{
      if(item.type!== 'action'){
        return  item.field
      }     
    });
    const query = gql`
      query  ${queryConfig.queryName}($queryInput:QueryInput){
        ${queryConfig.queryName}(queryInput:$queryInput){
          ${requireColumns.toString()}
        }
    }
    `;
    const variables = {
      ...{...queryConfig.variables}
    }

    this.query = this.apollo.watchQuery({
      query,
      variables
    });

    this.query.valueChanges.subscribe(result => {
      this.rowData[title] = result.data && result.data[queryConfig.queryName];
    });
  }

  onGridBtnClickEvent(event:any){
    console.log(event)
    if(event.action === "navigate"){
      this.router.navigateByUrl(`/${event.url}/${this.pageName}/${event.id?event.id:null}`)
    }
  }

}
