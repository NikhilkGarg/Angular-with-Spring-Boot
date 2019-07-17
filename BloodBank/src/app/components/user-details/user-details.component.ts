import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared_services/user.service';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private _userService:UserService,private _router:Router) { }
  private user:User;
  ngOnInit() {
    this.user=this._userService.getter();
  }

  processForm(){
      this._userService.updateUser(this.user).subscribe((user)=>{
        console.log(user);
        this._router.navigate(['/']);
      },
      (error)=>{
        console.log(error);
      });
  }
  
}
