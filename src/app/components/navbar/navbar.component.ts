import { Component } from '@angular/core';
import { LoginService } from 'src/Services/login.service';
import { AuthService } from 'src/Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  username:any;
  photo:any;
  user:any
  constructor(private loginService: LoginService,public authservice:AuthService,public routes:Router) {}

  ngOnInit() {
    this.loginService.user$.subscribe((user)=>{
    
      this.user=user
      this.username=user?.firstname
      this.photo=user?.Photourl
  
    });
}
logout(){
      this.authservice.Logout().subscribe({
        next:(res)=>{
        
          this.loginService.setUser(null);
          this.routes.navigate(['/login']);
        },
        error:(err)=>{
         console.log("error=",err)
        }
      })
}
getprofile(){

  this.routes.navigate(['/profile']);
}

}
