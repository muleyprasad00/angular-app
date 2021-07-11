import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { BtnCellRendererComponent } from './btn-cell-renderer/btn-cell-renderer.component';

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
  @Input() gridButtons:any = []
  
  @Output() GridBtnClickEvent = new EventEmitter<boolean>();
  

  @Input() defaultColDef = {
    resizable: true
  };

  columnDefs = [
    { field: 'id' },
    { field: 'name' },
    { field: 'from'},
    { field: 'to' },
    { field: 'date' },
    { field: 'vehicleNo'},
    {
    field: "action",
    cellRenderer: "btnCellRenderer",
    cellRendererParams: {
      btnText:"Edit",
      clicked: function(field: any) {
        alert(`${field} was clicked`);
      }
    },
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

  constructor() {
    this.frameworkComponents = {
      btnCellRenderer: BtnCellRendererComponent
    };
  }

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


  onGridBtnClick(event:any){
    this.GridBtnClickEvent.emit(event)
  }

}
