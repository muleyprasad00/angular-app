import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  private userConfig = new BehaviorSubject<object>({});
  userCast = this.userConfig.asObservable();

  private userDetails = {appName:'',i18n:[],sidebar:[]}

  constructor(private http:HttpClient) { }

  fetchUserDetails(){
    this.http.get(`/api`).subscribe((data:any)=>{
      this.userDetails = data;
      this.userConfig.next(cloneDeep(this.userDetails))
    })
  }
  // getUserDetails(){
  //   return cloneDeep(this.userDetails);
  // }

  // geti18n(){
  //   return cloneDeep(this.userDetails.i18n[0]);
  // }

}

