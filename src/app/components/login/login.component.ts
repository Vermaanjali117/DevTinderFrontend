import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';
import { LoginService } from 'src/Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email:any;
  getpasswod:any;
  getmail:any;
  password:any;
  emailError=false;
  passwordError=false;
  isLoggedin:boolean=true;
  firstname:any;
  lastname:any;
  constructor(
    private authService:AuthService,
    private loginService:LoginService,
    public routes: Router
  ) {}
  ngOnInit(): void {}

  getemail(e: any) {
    this.getmail = e;
  }
  getlastname(e:any){
    this.lastname=e;
  }
  getpassword(e: any) {
    this.getpasswod = e;
  }
  getfirstname(e:any){
    this.firstname=e;
  }

  onSubmit(loginForm:any){
     if(loginForm.valid){
      var data=loginForm.value;
      console.log("data",data)

      if(this.isLoggedin){
        try {
          this.authService.loginpost(data).subscribe((user:any)=>{
            if (user.message == 'user loggedIn successfully') {
              this.loginService.setUser(user.user); 
       
              this.routes.navigate(['/feed']);
            }
          });
        } catch (err) {
          console.log('error =====', err);
        }
      }else{
        try {
          this.authService.Signuppost(data).subscribe((user:any)=>{
            if (user.message == 'User added successfully') {
              this.loginService.setUser(user.userdata); 
              this.routes.navigate(['/profile']);
            }
          });
        } catch (err) {
          console.log('error =====', err);
        }
      }
 }else{
      console.log("form is invalid")
     }
  }
  togglelogin(){
    this.isLoggedin = !this.isLoggedin;
  }
}
