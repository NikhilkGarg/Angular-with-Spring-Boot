import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/classes/campaign';
import { Router } from '@angular/router';
import { CampaignService } from 'src/app/shared_services/campaign.service';

@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css']
})
export class CampaignCreateComponent implements OnInit {

  private camp:Campaign;
  constructor(private _campService:CampaignService,private _router:Router) { }
  
  ngOnInit() {
    this.camp=this._campService.getter();
    console.log(this.camp);
  }

  processForm(){
    if(this.camp.campaignID==undefined){
      this._campService.createCampaign(this.camp).subscribe((camp)=>{
        console.log(camp);
        this._router.navigate(['/listCamps']);
      },
      (error)=>{
        console.log(error);
      });
    }else
    {
      this._campService.updateCampaign(this.camp).subscribe((camp)=>{
        console.log(camp);
        this._router.navigate(['/listCamps']);
      },
      (error)=>{
        console.log(error);
      });
    }
  }

}
