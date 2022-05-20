import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {

  constructor(private route:Router){

  }

  canActivate(){
    let role = localStorage.getItem('utype')
    
    if (role =='admin'){
      return true
      
    }
    //alert("You don't have admin rights")
    this.route.navigate(['unauthorized'])
    return false;
  }
  
}
