import { FeedBack } from './../../classes/feed-back';
import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/shared_services/feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  private feed:FeedBack;
  constructor(private _feedService:FeedbackService,private _router:Router) { }

  ngOnInit() {  }

  submitFeedback(form){
    this.feed=form.value;
    console.log(this.feed);
    
    //if(this.user.userID==undefined){
      this._feedService.createFeedBack(this.feed).subscribe((feed)=>{
        console.log(feed);
        //this.feed=feed;
        this._router.navigate(['/']);
      },
      (error)=>{
        alert("error");
        console.log(error);
      });
    //}
  }
    

}
