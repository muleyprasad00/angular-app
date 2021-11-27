import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserConfigService } from 'src/app/user-config.service';
import { _i18n } from '../../mock-data'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  i18n: any;
  sidebar: {title:string,url:string,icon:string}[] = [];
  userConfigSub!: Subscription;
  constructor(private userService: UserConfigService) { }

  ngOnInit(): void {
    this.userConfigSub = this.userService.userCast.subscribe((userDetails: any) => {
      if (userDetails.appName) {
        this.userConfigSub?.unsubscribe();
        this.i18n = userDetails.i18n[0].translations;
        this.sidebar = userDetails.sidebarConfig;
      }
    });
  }

}
