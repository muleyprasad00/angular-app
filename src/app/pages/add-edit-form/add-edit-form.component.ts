import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {
  breadcrumbList = ['Home','Booking', 'Add Booking'];
  constructor() { }

  ngOnInit(): void {
  }

}
