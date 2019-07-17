import { Injectable } from '@angular/core';
import { Http,Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Campaign } from '../classes/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private baseURL:string="http://localhost:8080";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private camp:Campaign;

  constructor(private _http:HttpClient,private http:Http) { }

  setter(camp:Campaign){
    this.camp=camp;
  }

  getter(){
    return this.camp;
  }

  getCampaigns():Observable<Campaign[]>
  {
    return this._http.get<Campaign[]>(this.baseURL+'/staff/campaigns');
  }
  
  createCampaign(camp:Campaign):Observable<Campaign>
  {
    return this._http.post<Campaign>(this.baseURL+'/staff/campaign/create',camp);
  }

  updateCampaign(camp:Campaign):Observable<Campaign>
  {
    return this._http.put<Campaign>(this.baseURL+'/staff/campaign/update',camp);
  }

  deleteCampaign(campaignID:number)
  {
    return this.http.delete(this.baseURL+'/staff/campaign/'+campaignID,this.options).pipe(map((response:Response)=>response.json()));
  }

}
