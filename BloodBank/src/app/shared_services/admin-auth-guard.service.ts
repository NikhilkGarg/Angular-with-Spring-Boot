import { AdminService } from './admin.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router:Router) { }

  canActivate()
  {
    if(localStorage.getItem("admin"))
      return true;

    else
    this.router.navigate(['la']);

  }
}
