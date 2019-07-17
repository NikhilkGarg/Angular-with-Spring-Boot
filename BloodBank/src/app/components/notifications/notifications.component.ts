import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared_services/user.service';
import { Router } from '@angular/router';
import { Notification } from 'src/app/classes/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private _userService:UserService,private _router:Router) { }

  private notis:Notification[];
  ngOnInit() {
    this._userService.getNotifications().subscribe((notis)=>{
      console.log(notis);
      this.notis=notis;
    },(error)=>{console.log(error);
    });
  }

  deleteNotis(noti:Notification){
    this._userService.deleteNoti(noti.notifID).subscribe((data)=>{
      this.notis.splice(this.notis.indexOf(noti),1)
      },(error)=>{console.log(error);
    });
  }

}
