import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared_services/admin.service';
import { Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  constructor(private _adminService:AdminService,private _router:Router) { }
  private admin:Admin;
  ngOnInit() {
    this.admin=this._adminService.getter();
  }

  processForm(){
      this._adminService.updateAdmin(this.admin).subscribe((admin)=>{
        console.log(admin);
        this._router.navigate(['/la']);
      },
      (error)=>{
        console.log(error);
      });
  }
  

}
