import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularAssignment';

  constructor(private route:Router){}


  logout(){
    localStorage.clear()
    alert("Logout Successfull")
    this.route.navigate(['auth'])

  }
}
