import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared_services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-user-create-update-by-staff',
  templateUrl: './user-create-update-by-staff.component.html',
  styleUrls: ['./user-create-update-by-staff.component.css']
})
export class UserCreateUpdateByStaffComponent implements OnInit {

  private user:User;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit() {
    this.user=this._userService.getter();
  }

  processForm(){
    if(this.user.userID==undefined){
      this._userService.createUser(this.user).subscribe((user)=>{
        console.log(user);
        this._router.navigate(['/listUsers']);
      },
      (error)=>{
        console.log(error);
      });
    }else
    {
      this._userService.updateUser(this.user).subscribe((user)=>{
        console.log(user);
        this._router.navigate(['/listUsers']);
      },
      (error)=>{
        console.log(error);
      });
    }
  }
}
