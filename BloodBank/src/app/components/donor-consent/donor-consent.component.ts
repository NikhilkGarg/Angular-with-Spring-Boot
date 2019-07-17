import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-consent',
  templateUrl: './donor-consent.component.html',
  styleUrls: ['./donor-consent.component.css']
})
export class DonorConsentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  consent()
  {
    this.router.navigate(['/udb']);
  }

}
