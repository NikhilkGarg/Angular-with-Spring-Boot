import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared_services/user.service';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private _userService:UserService,private _router:Router) { }

  private users:User[];
  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{
      console.log(users);
      this.users=users;
    },(error)=>{console.log(error);
    });
  }
  deleteUser(user){
    this._userService.deleteUser(user.userID).subscribe((data)=>{
      this.users.splice(this.users.indexOf(user),1)
      },(error)=>{console.log(error);
    });
  }

  updateUser(user){
    this._userService.setter(user);
    this._router.navigate(['/cuUser']);
  }

  createUser(){
    let user = new User();
    this._userService.setter(user);
    this._router.navigate(['/cuUser']);
  }

}
