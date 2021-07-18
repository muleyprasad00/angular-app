import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-btn-cell-renderer',
  templateUrl: './btn-cell-renderer.component.html',
  styleUrls: ['./btn-cell-renderer.component.css']
})
export class BtnCellRendererComponent implements ICellRendererAngularComp , OnInit {
  private params: any;
  btnText:string = '';
  btnClass:string = ''
  agInit(params: any): void {
    this.params = params;
    this.btnText = params.btnText;
    this.btnClass = params.btnClass;
  }

  btnClickedHandler() {
    this.params.clicked(this.params.data.id);
  }
  constructor() { }
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
