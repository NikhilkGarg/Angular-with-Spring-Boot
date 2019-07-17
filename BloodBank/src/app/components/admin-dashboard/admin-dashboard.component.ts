import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared_services/admin.service';
import { Admin } from 'src/app/classes/admin';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  constructor(private router:Router,private _adminService:AdminService) { }

  admin:Admin
  ngOnInit() {
    this._adminService.getter();
    this.admin=JSON.parse(localStorage.getItem("admin"));
  }


  liststaffclick:boolean=true;
  editpageclick:boolean=false;
  feedbackclick:boolean=false;
  editAdmin()
  {
    this.editpageclick=!this.editpageclick;
    this.liststaffclick=false;
    this.feedbackclick=false;
  }

  viewStaff()
  {
    this.liststaffclick=!this.liststaffclick;
    this.editpageclick=false;
    this.feedbackclick=false;
  
  }

  feedback()
  {
    this.feedbackclick=!this.feedbackclick;
    this.editpageclick=false;
    this.liststaffclick=false;
  }

  logout()
  {
    localStorage.removeItem("admin");
    this.router.navigate(['']);
  }


  


}
