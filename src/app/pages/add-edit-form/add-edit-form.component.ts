import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Apollo, gql, QueryRef } from 'apollo-angular';
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
  breadcrumbList = ['Home', '', 'Update'];
  i18n: any;
  formsConfig: any;
  queryConfig:any;
  userConfigSub$!: Subscription;
  pageName: string = '';
  id: string = '';
  show=false;
  private query: QueryRef<any> | undefined;

  constructor(private userService: UserConfigService, private route: ActivatedRoute,
    private http: HttpClient, private spinner: NgxSpinnerService,
    private apollo: Apollo) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pageName = String(params.get('name'));
      this.id = String(params.get('id'));

      if (!this.pageName) return;
      this.userConfigSub$ = this.userService.userCast.subscribe((userDetails: any) => {
        if (userDetails.appName) {
          if (this.userConfigSub$)
            this.userConfigSub$.unsubscribe();
          this.i18n = userDetails.i18n[0].translations;
          this.breadcrumbList[1] = capitalize(this.pageName)
          this.fetchData();          
        }
      });
    })
  }

  fetchData() {
    this.http.get(`/config/formsConfig.json`).subscribe((res: any) => {
      this.formsConfig = res[this.pageName].formsConfig;
      this.queryConfig = res[this.pageName].queryConfig;   
      this.spinner.hide();
      if (this.id !== 'null') {
        this.fetchDataByID(res[this.pageName].queryConfig,);
      }else{
        this.show = true;
      }
    })
  }

  fetchDataByID(queryConfig: any) {
    const requireColumns = this.formsConfig.map((item: { name: any; }) => item.name);
    const query = gql`
      query  ${queryConfig.queryName}($queryInput:QueryInput){
        ${queryConfig.queryName}(queryInput:$queryInput){
         data
        }
    }
    `;
    const reqConfig = queryConfig.variables;
    reqConfig.columns = requireColumns;
    reqConfig.id = this.id;
    const variables:any = {
      queryInput:{...reqConfig}
    }
    this.query = this.apollo.watchQuery({
      query,
      variables
    });

    this.query.valueChanges.subscribe(result => {
      if(result.data && result.data[queryConfig.queryName]){
        const data = JSON.parse(result.data[queryConfig.queryName].data);
        const rowData:any = []
        for(let item in data){
          data[item].forEach((row:any,index:any) => {            
            if(!rowData[index]){
              rowData[index] = {};
            }
            rowData[index][item] = row;
          });
        }        
        for (let item in rowData[0]) {
          this.formsConfig?.forEach((element: any) => {
            if (item === element.name) {
              element.value = rowData[0][item]
            }
          });
        }
        this.show = true;
        this.spinner.hide();
      }
    });
  }

  onSubmit(event: any) {
    this.spinner.show();
    const queryConfig = {
      queryName: this.id !== 'null' ?'updateData':'createData'
    }
    this.mutate(event,queryConfig)
  }
  insert(event:any) {
    const queryConfig = {
      queryName: 'createData'
    }
    const query = gql`
    mutation  ${queryConfig.queryName}($queryInput:QueryInput){
        ${queryConfig.queryName}(queryInput:$queryInput){
          data
        }
    }
    `;
    const reqConfig = {
      datatable:  this.queryConfig?.variables?.datatable,
      data: JSON.stringify(event)
    };

    const variables: any = {
      queryInput: { ...reqConfig }
    }
    this.apollo.mutate({
      mutation: query,
      variables
    }).subscribe(({ data }) => {
      this.spinner.hide();
      window.history.back();
    },(error) => {
      this.spinner.hide();
      console.log('there was an error sending the query', error);
    });
  }

  update(event:any){
  }


  mutate(event:any,queryConfig:any){
    const query = gql`
    mutation  ${queryConfig.queryName}($queryInput:QueryInput){
        ${queryConfig.queryName}(queryInput:$queryInput){
          data
        }
    }
    `;
    const reqConfig:any = {
      datatable:  this.queryConfig?.variables?.datatable,
      data: JSON.stringify(event),
      id:this.id
    };
    if(this.id === 'null'){
      delete reqConfig.id
    }
    const variables: any = {
      queryInput: { ...reqConfig }
    }
    this.apollo.mutate({
      mutation: query,
      variables
    }).subscribe(({ data }) => {
      this.spinner.hide();
      window.history.back();
    },(error) => {
      this.spinner.hide();
      console.log('there was an error sending the query', error);
    });
  }

}
