import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/Services/login.service';
import { AuthService } from 'src/Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    public authservice: AuthService,
    public routes: Router
  ) {}
  ngOnInit(): void {
    this.getuserdata();
  }
  getuserdata() {
   
    this.authservice.GetUserCredentials().subscribe({
      next: (user:any)=>{
       
        this.loginService.setUser(user);
      },
      error: (err) => {
        console.log("error ===",err);
        if(err.status==401){
          this.routes.navigate(['/login']);
        }
 
      }
    });
    
  }
}
