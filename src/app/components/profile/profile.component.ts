import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/Services/login.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  username: any;
  photo: any;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.user$.subscribe((user)=>{
      this.user = user;
    });
  }
  onUserDataChange(updatedUser:any) {
    
    // Update the user object and propagate changes to the LoginService
    this.user = updatedUser;
    this.loginService.setUser(this.user); // Update the shared state
  }
}
