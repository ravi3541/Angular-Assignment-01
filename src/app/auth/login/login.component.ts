import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginform: FormGroup;

  constructor(private route:Router,private formBuilder:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email:[''],
      pass:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/user").subscribe(res => {
      const user = res.find((u:any)=>{
        console.warn("email"+this.loginform.value.email)
        console.warn("pass"+this.loginform.value.pass)
        return u.email ===this.loginform.value.email && u.pass ===this.loginform.value.pass
      });
      if (user){
        console.warn(user.utype)
        alert("login Successfull")
        // this.loginform.reset()
        this.route.navigate(['feature'])
        localStorage.setItem('utype',user.utype)
        localStorage.setItem('email',user.email)


        
        

      }else{
        alert("Login Failed")
        //this.route.navigate(['login'])
      }
    })

    
    
  }
}
