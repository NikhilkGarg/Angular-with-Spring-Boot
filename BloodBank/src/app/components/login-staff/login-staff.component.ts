import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared_services/staff.service';
import { Staff } from 'src/app/classes/staff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-staff',
  templateUrl: './login-staff.component.html',
  styleUrls: ['./login-staff.component.css']
})
export class LoginStaffComponent implements OnInit {

  constructor(private staffService:StaffService,private _router:Router) { }
  staff:Staff
  ngOnInit() {
  }

  loginStaff(form){
    this.staffService.validateStaff(form.value.username,form.value.password,this.staff).subscribe(
      res => {
        this.staff=res;
        if(this.staff==null)
        {
          alert("Invalid staff!!\n login again");
          this._router.navigate(['/']);
        }
        else
        {
          localStorage.setItem("staff",JSON.stringify(this.staff));
          this.staffService.setter(this.staff);
          this._router.navigate(['/sdb']);
        }
        //console.log(this.staff);
      },
      err => {alert("An error has occurred");}
    );
    
  }
}
