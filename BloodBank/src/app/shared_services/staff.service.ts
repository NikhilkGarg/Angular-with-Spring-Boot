import { Injectable } from '@angular/core';
import { Staff } from '../classes/staff';
import { Http,Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseURL:string="http://localhost:8080";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private staff:Staff;

  constructor(private _http:HttpClient,private http:Http) { }

  setter(staff:Staff){
    this.staff=staff;
  }

  getter(){
    return this.staff;
  }
  
  getStaffs():Observable<Staff[]>
  {
    return this._http.get<Staff[]>(this.baseURL+'/staffs');
  }

  deleteStaff(staffID:Number){
    return this.http.delete(this.baseURL+'/staff/'+staffID,this.options).pipe(map((response:Response)=>response.json()));
  }

  validateStaff(staffUserName:string,staffPassword:string,staff:Staff):Observable<Staff>
  {
    console.log(staffUserName);
    return this._http.post<Staff>(this.baseURL+"/staff/login/"+staffUserName+"&"+staffPassword,staff);
  }
  createStaff(staff:Staff):Observable<Staff>
  {
    return this._http.post<Staff>(this.baseURL+'/staff/',staff);
  }

  updateStaff(staff:Staff):Observable<Staff>
  {
    return this._http.put<Staff>(this.baseURL+'/staff/',staff);
  }
  
}
