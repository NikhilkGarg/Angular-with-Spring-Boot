import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Http,Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Notification } from '../classes/notification';
import { Campaign } from '../classes/campaign';
import { Donation } from '../classes/donation';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL:string="http://localhost:8080";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private user:User;
  constructor(private _http:HttpClient,private http:Http) { }

  setter(user:User){
    this.user=user;
  }

  getter(){
    return this.user;
  }

  getUsers():Observable<User[]>
  {
    return this._http.get<User[]>(this.baseURL+'/users');
  }

  // getUser(userID:Number){
  //   return this._http.get(this.baseURL+'/user/'+userID,this.options).pipe(map((response:Response)=>response.json()));
  // }

  validateUser(userUserName:string,userPassword:string,user:User):Observable<User>
  {
    //console.log(userUserName);
    return this._http.post<User>(this.baseURL+"/user/login/"+userUserName+"&"+userPassword,user);
  }

  deleteUser(userID:Number){
    return this.http.delete(this.baseURL+'/user/'+userID,this.options).pipe(map((response:Response)=>response.json()));
  }

  createUser(user:User):Observable<User>
  {
    return this._http.post<User>(this.baseURL+'/user/',user);
  }

  updateUser(user:User):Observable<User>
  {
    return this._http.put<User>(this.baseURL+'/user/',user);
  }

  getNotifications():Observable<Notification[]>
  {
    return this._http.get<Notification[]>(this.baseURL+'/user/notifications');
  }

  deleteNoti(notiID:number)
  {
    return this.http.delete(this.baseURL+'/user/notification/'+notiID,this.options).pipe(map((response:Response)=>response.json()));
  }
  getCampaigns():Observable<Campaign[]>
  {
    return this._http.get<Campaign[]>(this.baseURL+'/user/campaigns');
  }
  reqDonationForm(don:Donation):Observable<Donation>
  {
    return this._http.post<Donation>(this.baseURL+'/user/donation/form',don);
  }

}
