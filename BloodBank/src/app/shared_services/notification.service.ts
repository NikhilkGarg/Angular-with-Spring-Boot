import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Notification } from '../classes/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseURL:string="http://localhost:8080";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private notif:Notification;

  constructor(private _http:HttpClient,private http:Http) { }

  setter(notif:Notification){
    this.notif=notif;
  }

  getter(){
    return this.notif;
  }
  
  getNotifications():Observable<Notification[]>
  {
    return this._http.get<Notification[]>(this.baseURL+'/staff/notifs');
  }

  deleteNotification(notifID:Number){
    return this.http.delete(this.baseURL+'/staff/notif/'+notifID,this.options).pipe(map((response:Response)=>response.json()));
  }
  
  createNotification(notif:Notification):Observable<Notification>
  {
    return this._http.post<Notification>(this.baseURL+'/staff/notif/create',notif);
  }

  updateNotification(notif:Notification):Observable<Notification>
  {
    return this._http.put<Notification>(this.baseURL+'/staff/notif/update',notif);
  }
  
}
