import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Columns } from 'src/app/components/grid/column';
import { UserConfigService } from 'src/app/user-config.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  breadcrumbList = [];
  gridButtons = []
  columns:Columns[] = [];
  rowData = [];
  frameworkComponents:any;
  i18n: any;
  bookingConfig:any;
  userConfigSub$!: Subscription;


  constructor(private userService: UserConfigService, private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.userConfigSub$ = this.userService.userCast.subscribe((userDetails: any) => {
      if (userDetails.appName) {
        // this.userConfigSub$.unsubscribe();
        this.i18n = userDetails.i18n[0].translations;
        this.bookingConfig = userDetails.bookingConfig;
        this.gridButtons =  this.bookingConfig.gridButtons;
        this.breadcrumbList = this.bookingConfig.breadcrumbList;
        this.columns = this.bookingConfig.columns;
        this.fetchRowData();
      }
    });
  }

  fetchRowData(){
    this.http.get(`/api/${this.bookingConfig.apiUrl}`).subscribe((res:any)=>{
      this.rowData = res.result;
    })
  }

  onGridBtnClickEvent(event:any){    
    this.router.navigateByUrl(`/${event.url}`)
  }

}
