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
          ${requireColumns.toString()}
        }
    }
    `;
    const variables = {
      ...{ ...queryConfig.variables }
    }
    variables.queryInput.id = this.id;
    this.query = this.apollo.watchQuery({
      query,
      variables
    });
    this.query.valueChanges.subscribe(result => {
      if (result.data && result.data[queryConfig.queryName]) {
        for (let item in result.data[queryConfig.queryName]) {
          this.formsConfig?.forEach((element: any) => {
            if (item === element.name) {
              element.value = result.data[queryConfig.queryName][item]
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
    if (this.id === 'null') {
      this.http.post(`/api/${this.pageName}`, event).subscribe(res => {
        this.spinner.hide();
        window.history.back();
      })
    }else{
      this.http.put(`/api/${this.pageName}/${this.id}`, event).subscribe(res => {
        this.spinner.hide();
        window.history.back();
      })
    }
    
  }

}
