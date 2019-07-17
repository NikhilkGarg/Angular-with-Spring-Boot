import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared_services/user.service';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/classes/campaign';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  constructor(private _userService:UserService,private _router:Router) { }

  private camps:Campaign[];
  ngOnInit() {
    this._userService.getCampaigns().subscribe((camps)=>{
      console.log(camps);
      this.camps=camps;
    },(error)=>{console.log(error);
    });
  }

}
