import { Injectable } from '@angular/core';
import { Httpservice } from '../../components/httpservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(
    private httpSrvc: Httpservice,
  ) { }

  authLogin(data) {  
    return  this.httpSrvc.cooperativePost(`/api/v1/SuperAdmin/SuperAdmin-login`,data);
   }

   authvalidatetoken(logintoken) {  
    return  this.httpSrvc.cooperativeGet(`/api/v1/SuperAdmin/GetSuperAdminProfileByLoginToken?Logintoken=${logintoken}`);
   }
}
