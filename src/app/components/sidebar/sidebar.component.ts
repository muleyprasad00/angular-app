import { Component, OnInit } from '@angular/core';
import { _i18n } from '../../mock-data'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   i18n:any
  constructor() { }

  ngOnInit(): void {
  this.i18n = _i18n.translations;

  }

}
