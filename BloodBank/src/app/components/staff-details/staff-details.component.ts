import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared_services/staff.service';
import { Router } from '@angular/router';
import { Staff } from 'src/app/classes/staff';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  constructor(private _staffService:StaffService,private _router:Router) { }
  private staff:Staff;
  ngOnInit() {
    this.staff=this._staffService.getter();
  }

  processForm(){
      this._staffService.updateStaff(this.staff).subscribe((staff)=>{
        console.log(staff);
        this._router.navigate(['/ls']);
      },
      (error)=>{
        console.log(error);
      });
  }
  
}
