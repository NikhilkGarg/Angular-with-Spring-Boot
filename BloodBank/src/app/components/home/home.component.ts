import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared_services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService,private _router:Router) { }
  user:User;
  ngOnInit() {
    }

  loginUser(form){
    
    this.userService.validateUser(form.value.username,form.value.password,this.user).subscribe(
     res => {
       this.user=res;
       if(this.user==null)
       {
         alert("Invalid user!!\n login again");
         this._router.navigate(['/']);
       }
       else
       {
        localStorage.setItem("user",JSON.stringify(this.user)); 
        this.userService.setter(this.user);
         this._router.navigate(['/udb']);
        // console.log(localStorage.getItem("user"));
       }
       //console.log(this.user);
     },
     err => {alert("An error has occurred");}
   
   );
   
   }
  createUser(){
    let user = new User();
    this._router.navigate(['/ru']);
  }

  loginStaff(){
    this._router.navigate(['/ls']);
  }
}
