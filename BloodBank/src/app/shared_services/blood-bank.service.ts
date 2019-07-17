import { Injectable } from '@angular/core';
import { BloodBank } from '../classes/blood-bank';
import { Http,Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  private baseURL:string="http://localhost:8080";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private bb:BloodBank;

  constructor(private _http:HttpClient,private http:Http) { }

  setter(bb:BloodBank){
    this.bb=bb;
  }

  getter(){
    return this.bb;
  }
  
  getBloodBanks():Observable<BloodBank[]>
  {
    return this._http.get<BloodBank[]>(this.baseURL+'/staff/bloodbanks');
  }

  // deleteBlood(staffID:Number){
  //   return this.http.delete(this.baseURL+'/staff/'+staffID,this.options).pipe(map((response:Response)=>response.json()));
  // }
  
  createBloodBank(bb:BloodBank):Observable<BloodBank>
  {
    return this._http.post<BloodBank>(this.baseURL+'/staff/bloodbank/create',bb);
  }

  updateBloodBank(bb:BloodBank):Observable<BloodBank>
  {
    return this._http.put<BloodBank>(this.baseURL+'/staff/bloodbank/update',bb);
  }

}
