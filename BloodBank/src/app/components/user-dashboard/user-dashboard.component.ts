import { User } from './../../classes/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private _userService:UserService,
    private router:Router) { }
  user:User
  ngOnInit() {
    this._userService.getter();
    this.user=JSON.parse(localStorage.getItem("user"));
  }

  userpageclick:boolean=false;
  notificationclick:boolean=false;
  campaignclick:boolean=false;
  donationclick:boolean=false;
  notifyclick:boolean=true;
  userpage()
  {
   console.log("edit profile clicked");
    this.userpageclick=!this.userpageclick;
    this.notificationclick=false;
    this.campaignclick=false;
    this.donationclick=false;
    this.notifyclick=false;
  }

  getNotification()
  {
   console.log("notification clicked");
    this.notificationclick=!this.notificationclick;
    this.userpageclick=false;
    this.campaignclick=false;
    this.donationclick=false;
    this.notifyclick=false;
  }

  getCampaign()
  {
   console.log("campaign clicked");
    this.campaignclick=!this.campaignclick;
    this.userpageclick=false;
    this.notificationclick=false;
    this.donationclick=false;
    this.notifyclick=false;
  }

  donation()
  {
   console.log("donor form clicked");
    this.donationclick=!this.donationclick;
    this.userpageclick=false;
    this.notificationclick=false;
    this.campaignclick=false;
    this.notifyclick=false;
  }

  logout()
  {
    localStorage.removeItem("user");
    this.router.navigate(['']);
  }

  
}
