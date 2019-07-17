import { BloodBankService } from 'src/app/shared_services/blood-bank.service';
import { BloodBank } from './../../classes/blood-bank';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/classes/staff';
import { StaffService } from 'src/app/shared_services/staff.service';
@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {

  constructor(private router:Router,private _staffService:StaffService,
    private bbservice:BloodBankService) { }

  staff:Staff
  private banks:BloodBank[];
  ngOnInit() {
    this._staffService.getter();
    this.staff=JSON.parse(localStorage.getItem("staff"));
    this.bbservice.getBloodBanks().subscribe((banks)=>{
      this.banks=banks;
    },(error)=>{console.log(error);
    });
  }

  
  listusersclick:boolean=false;
  editpageclick:boolean=false;
  listnotifclick:boolean=false;
  listbankclick:boolean=false;
  listcampclick:boolean=false;
  edit()
  {
    console.log("in edit");
    this.listusersclick=false;
    this.editpageclick=!this.editpageclick;
    this.listbankclick=false;
    this.listcampclick=this.listnotifclick=false;
  }

  viewUsers()
  {
    this.listusersclick=!this.listusersclick;
    this.editpageclick=false;
    this.listbankclick=this.listcampclick=this.listnotifclick=false;
  }

  logout()
  {
    localStorage.removeItem("staff");
    this.router.navigate(['']);
  }

  listNotifs(){
    this.listnotifclick=!this.listnotifclick;
    this.listusersclick=this.editpageclick=this.listcampclick=this.listbankclick=false;
  }
  listBanks(){
    this.listbankclick=!this.listbankclick;
    this.listusersclick=this.listnotifclick=this.listcampclick=this.editpageclick=false;
  }
  listCamps(){
    this.listcampclick=!this.listcampclick;
    this.editpageclick=this.listusersclick=this.listnotifclick=this.listbankclick=false;
  }

}
