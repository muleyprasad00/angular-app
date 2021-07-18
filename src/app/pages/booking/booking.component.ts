import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BtnCellRendererComponent } from 'src/app/components/grid/btn-cell-renderer/btn-cell-renderer.component';
import { Columns } from 'src/app/components/grid/column';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  breadcrumbList = ['Home','Booking'];

  gridButtons = [
    {
      title:"Add Booking",
      action:"navigate",
      url:"add-edit",
      class:"btn-sm btn-primary",
      type:"add"
    }
  ]


  columns:Columns[] = [
    { field: 'id', title:"id" },
    { field: 'name', title:"name" },
    { field: 'from', title:"from"},
    { field: 'to', title:"to" },
    { field: 'date', title:"date" },
    { field: 'vehicleNo', title:"vehicleNo"},
    {
    field: "action", title:"action",
    type:'action',
    buttonDetails:{
      btnText:"edit",
      btnClass:"btn-outline-primary"
    }
  }
];

rowData = [
    { id: 'IOP1', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP2', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP3', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP4', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP5', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP6', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP7', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP8', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP9', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' }
];
frameworkComponents:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onGridBtnClickEvent(event:any){    
    this.router.navigateByUrl(`/${event.url}`)
  }

}
