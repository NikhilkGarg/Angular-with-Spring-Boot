import { HttpClient } from '@angular/common/http';
import { FeedBack } from './../classes/feed-back';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseURL:string="http://localhost:8080";
  private feed:FeedBack;
  constructor(private _http:HttpClient) { }

  setter(feed:FeedBack){
    this.feed=feed;
  }

  getter(){
    return this.feed;
  }

  getFeedBacks():Observable<FeedBack[]>
  {
    return this._http.get<FeedBack[]>(this.baseURL+'/admin/feedbacks')
  }

  createFeedBack(feed:FeedBack):Observable<FeedBack>
  {
    return this._http.post<FeedBack>(this.baseURL+'/admin/feedback',feed);
  }
}
