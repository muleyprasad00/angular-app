import { Component, Input, OnInit } from '@angular/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

   gridApi:any;
   gridColumnApi:any;

  @Input() height = '300px';
  @Input() autoSizeCol = true;
  @Input() sizeColumnsToFit = true;
  

  @Input() defaultColDef = {
    resizable: true
  };

  columnDefs = [
    { field: 'id' },
    { field: 'name' },
    { field: 'from'},
    { field: 'to' },
    { field: 'date' },
    { field: 'vehicleNo'}
];

rowData = [
    { id: 'IOP1', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP1', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP1', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP1', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP1', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP1', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP1', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP1', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' },
    { id: 'IOP1', name: 'Indian Oil Pvt.Ltd', from: 'Mumbai', to:'Pune', date:'01/07/2021', vehicleNo:'MH12-cc-2200' }
];

  constructor() { }

  ngOnInit(): void {
  }

  onGridReady(params:GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;    
    this.autoSizeAll(this.autoSizeCol)
    if(this.sizeColumnsToFit)
    this.gridApi.sizeColumnsToFit();
    
  }

  autoSizeAll(skipHeader: any) {
    const allColumnIds:any[] = [];
    this.gridColumnApi.getAllColumns().forEach(function (column: any) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

}
