import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { BtnCellRendererComponent } from './btn-cell-renderer/btn-cell-renderer.component';
import { Columns } from './column';

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
  @Input() gridButtons:any = [];
  @Input() columns:Columns[] = [];
  @Input() rowData:any = [];
  @Input() title :string = ''
  @Input() i18n:any;
  @Output() GridBtnClickEvent = new EventEmitter<boolean>();
  @Output() GridReady = new EventEmitter<boolean>();
  
  @Input() defaultColDef = {
    resizable: true
  };

  columnDefs:Columns[] = [];
  frameworkComponents:any;

  constructor() {
    this.frameworkComponents = {
      btnCellRenderer: BtnCellRendererComponent
    };
  }

  ngOnInit(): void {

    this.columns.forEach(col => {
      const colObj:Columns = {
        field:col.field,
        title:this.i18n[col.title] || col.title,
        width:col.width
      };      
      if(col.type==='action'){
        colObj.cellRenderer = "btnCellRenderer";        
        colObj.cellRendererParams =  {
          btnText:col.buttonDetails?.btnText,
          btnClass:col.buttonDetails?.btnClass,
          clicked: (id:any)=>{
            this.onGridBtnClick(
              {
                action: col.buttonDetails?.action, url: col.buttonDetails?.url, id
              }
            )
          }
        }
      }
      this.columnDefs.push(colObj)
    });
  }

  

  onGridReady(params:GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi; 
    if(this.autoSizeCol)  
    this.autoSizeAll(this.autoSizeCol)
    if(this.sizeColumnsToFit)
    this.gridApi.sizeColumnsToFit();
    this.GridReady.emit();
  }

  autoSizeAll(skipHeader: any) {
    const allColumnIds:any[] = [];
    this.gridColumnApi.getAllColumns().forEach(function (column: any) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }


  onGridBtnClick(event:any){
    console.log(event)
    this.GridBtnClickEvent.emit(event)
  }

}
