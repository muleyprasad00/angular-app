import { Component, OnInit } from '@angular/core';
import { UserConfigService } from './user-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService:UserConfigService){}
  ngOnInit(): void {
    console.log("app initilize")
    this.userService.fetchUserDetails();
  }
}
