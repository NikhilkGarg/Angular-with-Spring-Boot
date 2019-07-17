import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/classes/staff';
import { StaffService } from 'src/app/shared_services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-create-update-form-by-admin',
  templateUrl: './staff-create-update-form-by-admin.component.html',
  styleUrls: ['./staff-create-update-form-by-admin.component.css']
})
export class StaffCreateUpdateFormByAdminComponent implements OnInit {

  private staff:Staff;
  constructor(private _staffService:StaffService,private _router:Router) { }

  ngOnInit() {
    this.staff=this._staffService.getter();
  }

  processForm(){
    if(this.staff.staffID==undefined){
      this._staffService.createStaff(this.staff).subscribe((staff)=>{
        console.log(staff);
        this._router.navigate(['/listStaffs']);
      },
      (error)=>{
        console.log(error);
      });
    }else
    {
      this._staffService.updateStaff(this.staff).subscribe((staff)=>{
        console.log(staff);
        this._router.navigate(['/listStaffs']);
      },
      (error)=>{
        console.log(error);
      });
    }
  }

}
