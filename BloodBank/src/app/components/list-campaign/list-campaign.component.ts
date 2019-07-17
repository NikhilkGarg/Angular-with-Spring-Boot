import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/classes/campaign';
import { CampaignService } from 'src/app/shared_services/campaign.service';

@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.css']
})
export class ListCampaignComponent implements OnInit {

  constructor(private _campService:CampaignService,private _router:Router) { }

  private camps:Campaign[];
  ngOnInit() {
    this._campService.getCampaigns().subscribe((camps)=>{
      console.log(camps);
      this.camps=camps;
    },(error)=>{console.log(error);
    });
  }
  deleteCampaign(camp){
    this._campService.deleteCampaign(camp.campaignID).subscribe((data)=>{
      this.camps.splice(this.camps.indexOf(camp),1)
      },(error)=>{console.log(error);
    });
  }

  updateCampaign(camp){
    this._campService.setter(camp);
    this._router.navigate(['/createCamp']);
  }

  createCampaign(){
    let camp = new Campaign();
    this._campService.setter(camp);
    this._router.navigate(['/createCamp']);
  }


}
