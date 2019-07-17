import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared_services/admin.service';
import { Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private adminService:AdminService,private _router:Router) { }
  admin:Admin
  ngOnInit() {
  }

  loginAdmin(form){
    this.adminService.validateAdmin(form.value.username,form.value.password,this.admin).subscribe(
      res => {
        this.admin=res;
        if(this.admin==null)
        {
          alert("Invalid admin!!\n login again");
          this._router.navigate(['/']);
        }
        else
        {
          localStorage.setItem("admin",JSON.stringify(this.admin));
          this.adminService.setter(this.admin);
          this._router.navigate(['/adb']);
        }
        //console.log(this.admin);
      },
      err => {alert("An error has occurred");}
    );
    
  }

}
