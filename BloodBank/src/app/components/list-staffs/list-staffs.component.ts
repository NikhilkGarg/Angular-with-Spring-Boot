import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared_services/staff.service';
import { Router } from '@angular/router';
import { Staff } from 'src/app/classes/staff';

@Component({
  selector: 'app-list-staffs',
  templateUrl: './list-staffs.component.html',
  styleUrls: ['./list-staffs.component.css']
})
export class ListStaffsComponent implements OnInit {

  constructor(private _staffService:StaffService,private _router:Router) { }

  private staffs:Staff[];
  ngOnInit() {
    this._staffService.getStaffs().subscribe((staffs)=>{
      console.log(staffs);
      this.staffs=staffs;
    },(error)=>{console.log(error);
    });
  }
  deleteStaff(staff){
    this._staffService.deleteStaff(staff.staffID).subscribe((data)=>{
      this.staffs.splice(this.staffs.indexOf(staff),1)
      },(error)=>{console.log(error);
    });
  }

  updateStaff(staff){
    this._staffService.setter(staff);
    this._router.navigate(['/cuStaff']);
  }

  createStaff(){
    let staff = new Staff();
    this._staffService.setter(staff);
    this._router.navigate(['/cuStaff']);
  }
}
