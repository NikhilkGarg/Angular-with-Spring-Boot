import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor(private router:Router) { }

  canActivate()
  {
    if(localStorage.getItem("user"))
      return true;

    else
    this.router.navigate(['']);

  }
}
