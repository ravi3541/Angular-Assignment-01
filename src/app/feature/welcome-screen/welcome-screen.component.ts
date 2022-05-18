import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {
  
  greeting:string = '';
  constructor() {
    
  }

  

  ngOnInit(){
    let date:Date = new Date();
    let hr = date.getHours();
  
    if (hr < 12) {
      this.greeting = "Good Morning Ravi" ;
    } else if (hr < 16) {
      this.greeting = "Good Afternoon Ravi";
    } else {
      this.greeting = "Good Evening Ravi";
    }

  }

}
