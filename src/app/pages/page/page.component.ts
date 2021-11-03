import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Columns } from 'src/app/components/grid/column';
import { UserConfigService } from 'src/app/user-config.service';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { MasterService } from 'src/app/master.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  breadcrumbList = [];
  gridButtons = []
  columns: Columns[] = [];
  rowData: any = {};
  frameworkComponents: any;
  i18n: any;
  pageConfig: any;
  userConfigSub$!: Subscription;
  pageName: string = '';
  queryConfig: any = {};
  gridApi: any = {};
  gridOptions: any = {};
  private query: QueryRef<any> | undefined;
  constructor(
    private userService: UserConfigService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private apollo: Apollo,
    private masterService: MasterService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.i18n = null;
      this.pageName = String(params.get('name'));
      if (!this.pageName) return;
      this.userConfigSub$ = this.userService.userCast.subscribe((userDetails: any) => {
        if (userDetails.appName) {
          setTimeout(() => {
            if (this.userConfigSub$)
              this.userConfigSub$.unsubscribe();
            this.i18n = userDetails.i18n[0].translations;
            this.pageConfig = userDetails[this.pageName];
            this.spinner.hide();
          }, 0);
        }
      });
    })
  }

  fetchData(event: any, queryConfig: any, columns: any = [], title: string) {
    this.gridApi[title] = event.params.api;
    this.gridOptions[title] = event.params.api;
    this.queryConfig[title] = queryConfig;
    const requireColumns: any = []
    columns.forEach((item: any) => {
      if (item.type !== 'action') {
        requireColumns.push(item.field)
      }
    });
    this.masterService.get(queryConfig, requireColumns).subscribe(result => {
      if (result.data && result.data[queryConfig.queryName]) {
        const data = JSON.parse(result.data[queryConfig.queryName].data);
        this.rowData[title] = []
        for (let item in data) {
          data[item].forEach((row: any, index: any) => {
            if (!this.rowData[title][index]) {
              this.rowData[title][index] = {};
            }
            this.rowData[title][index][item] = row;
          });
        }
      }
    });
  }

  onGridBtnClickEvent(event: any) {
    if (event.action === "navigate") {
      this.router.navigateByUrl(`/${event.url}/${this.pageName}/${event.id ? event.id : null}`)
    } else if (event.action === "delete") {
      this.removeItemFromList(event);
    }
  }
  removeItemFromList(event: any) {
    this.spinner.show();
    const queryConfig = this.queryConfig[event.title]
    this.masterService.delete(queryConfig, event.id).subscribe(({ data }) => {
      const rowIndex = this.rowData[event.title].findIndex((item: any) => item.id === event.id);
      this.rowData[event.title].splice(rowIndex, 1);
      this.gridApi[event.title].setRowData(this.rowData[event.title]);
      this.spinner.hide();
    }, (error) => {
      this.spinner.hide();
      console.log('there was an error sending the query', error);
    });
  }

}
