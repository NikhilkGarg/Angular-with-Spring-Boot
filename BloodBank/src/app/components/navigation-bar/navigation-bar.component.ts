import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout()
  {
    localStorage.removeItem("admin");
    localStorage.removeItem("staff");
    localStorage.removeItem("user");
    this.router.navigate(['']);
  }


  checkLogin()
  {
    if(localStorage.getItem("user") || localStorage.getItem("staff") || localStorage.getItem("admin")) return true;
    else return false;
  }

}
