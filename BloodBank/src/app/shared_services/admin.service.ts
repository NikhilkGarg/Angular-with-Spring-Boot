import { Injectable } from '@angular/core';
import { Admin } from '../classes/admin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FeedBack } from '../classes/feed-back';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL:string="http://localhost:8080";
  private admin:Admin;
  constructor(private _http:HttpClient) { }

  setter(admin:Admin){
    this.admin=admin;
  }

  getter(){
    return this.admin;
  }

  getAdmins():Observable<Admin[]>
  {
    return this._http.get<Admin[]>(this.baseURL+'/admins');
  }

  validateAdmin(adminUserName:string,adminPassword:string,admin:Admin):Observable<Admin>
  {
    //console.log(adminUserName);
    return this._http.post<Admin>(this.baseURL+"/admin/login/"+adminUserName+"&"+adminPassword,admin);
  }
  createAdmin(admin:Admin):Observable<Admin>
  {
    return this._http.post<Admin>(this.baseURL+'/admin/',admin);
  }

  updateAdmin(admin:Admin):Observable<Admin>
  {
    return this._http.put<Admin>(this.baseURL+'/admin/',admin);
  }
}
