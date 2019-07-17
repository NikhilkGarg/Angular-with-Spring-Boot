import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared_services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  private user:User;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit() {
    
  }

  registerUser(form){
    this.user=form.value;
    console.log(this.user);
    
    //if(this.user.userID==undefined){
      this._userService.createUser(this.user).subscribe((user)=>{
        console.log(user);
        this._router.navigate(['/']);
      },
      (error)=>{
        alert("User Already Registered with same ID");
        console.log(error);
      });
    //}
  }
    

}
