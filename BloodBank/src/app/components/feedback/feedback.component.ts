import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedBack } from 'src/app/classes/feed-back';
import { FeedbackService } from 'src/app/shared_services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private _feedService:FeedbackService,private _router:Router) { }

  private feeds:FeedBack[];
  ngOnInit() {
    this._feedService.getFeedBacks().subscribe((feeds)=>{
      console.log(feeds);
      this.feeds=feeds;
    },(error)=>{console.log(error);
    });
  }
}