import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared_services/notification.service';
import { Router } from '@angular/router';
import { Notification } from 'src/app/classes/notification';

@Component({
  selector: 'app-notification-cu',
  templateUrl: './notification-cu.component.html',
  styleUrls: ['./notification-cu.component.css']
})
export class NotificationCUComponent implements OnInit {
  
  private notif:Notification;
  constructor(private _notifService:NotificationService,private _router:Router) { }

  ngOnInit() {
    this.notif=this._notifService.getter();
  }

  processForm(){
    if(this.notif.notifID==undefined){
      this._notifService.createNotification(this.notif).subscribe((notif)=>{
        console.log(notif);
        this._router.navigate(['/listNotifs']);
      },
      (error)=>{
        console.log(error);
      });
    }else
    {
      this._notifService.updateNotification(this.notif).subscribe((notif)=>{
        console.log(notif);
        this._router.navigate(['/listNotifs']);
      },
      (error)=>{
        console.log(error);
      });
    }
  }


}
