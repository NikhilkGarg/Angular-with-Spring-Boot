import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from 'src/app/classes/notification';
import { NotificationService } from 'src/app/shared_services/notification.service';

@Component({
  selector: 'app-list-notification',
  templateUrl: './list-notification.component.html',
  styleUrls: ['./list-notification.component.css']
})
export class ListNotificationComponent implements OnInit {

  constructor(private _notifService:NotificationService,private _router:Router) { }

  private notifs:Notification[];
  
  ngOnInit() {
    this._notifService.getNotifications().subscribe((notifs)=>{
      console.log(notifs);
      this.notifs=notifs;
    },(error)=>{console.log(error);
    });
  }

  deleteNotif(notif){
    this._notifService.deleteNotification(notif.notifID).subscribe((data)=>{
      this.notifs.splice(this.notifs.indexOf(notif),1)
      },(error)=>{console.log(error);
    });
  }

  updateNotif(notif){
    this._notifService.setter(notif);
    this._router.navigate(['/cuNotif']);
  }

  createNotif(){
    let notif = new Notification();
    this._notifService.setter(notif);
    this._router.navigate(['/cuNotif']);
  }

}
