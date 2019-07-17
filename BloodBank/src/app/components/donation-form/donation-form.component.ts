import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/classes/donation';
import { UserService } from 'src/app/shared_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {

  private don:Donation;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit() {
  }

  // reqDonationForm(form){
  //   this.don=form.value;
  //   console.log(this.don);
    
  //   //if(this.user.userID==undefined){
  //     this._userService.reqDonationForm(this.don).subscribe((don)=>{
  //       console.log(don);
  //       alert("Request Submitted Successfully");
  //       this._router.navigate(['/udb']);
  //     },
  //     (error)=>{
  //       alert("error");
  //       console.log(error);
  //     });
  //   //}
  // }
    

}
