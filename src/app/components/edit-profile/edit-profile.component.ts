import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { LoginService } from 'src/Services/login.service';
import { AuthService } from 'src/Services/auth.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

@Input() userData:any;
@Output() userDataChange = new EventEmitter<any>();
modifiedFields:any = {};
  constructor(public loginservice:LoginService,public authservice:AuthService) { }
  ngOnInit(): void {
      
     console.log("dfdghtft inside edit profile componet =",this.userData);
  }
  onFieldChange(feild:any, newValue:any) {
    console.log(`Field Changed: ${feild}, New Value: ${newValue}`);
  
    // Update the specific field in the userData object
    this.userData[feild] = newValue;
    this.modifiedFields[feild] = newValue;
    // Emit the updated userData object to the parent component
    this.userDataChange.emit(this.userData);
  }
  updatedata(){
    console.log(this.modifiedFields);
     this.authservice.updatedata(this.modifiedFields).subscribe((res:any)=>{
      alert(res.message)
         if(res.message=="success"){
             console.log('data updated successfully');
         }
     })
  }
}
