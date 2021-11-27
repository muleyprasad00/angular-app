import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserConfigService } from 'src/app/user-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  i18n: any;
  header:any;
  userConfigSub!: Subscription;
  constructor(private userService: UserConfigService, private router:Router) { }

  ngOnInit(): void {
    this.userConfigSub = this.userService.userCast.subscribe((userDetails: any) => {
      if (userDetails.appName) {
        this.userConfigSub?.unsubscribe();
        this.i18n = userDetails.i18n[0].translations
        this.header = userDetails.headerConfig;
      }
    });
  }

  sidebarToggle(event:any){
    event.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', JSON.stringify(document.body.classList.contains('sb-sidenav-toggled')));
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    localStorage.removeItem('isLoggedin');
    this.router.navigateByUrl('/')
  }

}
