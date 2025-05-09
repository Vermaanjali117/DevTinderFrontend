import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';
import { RequestsService } from 'src/Services/requests.service';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  ngOnInit(): void {
    this.getRequests();
  }
  dataarr:any=[];
  requests:any;
  constructor(public authservice: AuthService, public requestservice: RequestsService) {}
  getRequests() {
    this.authservice.getrequests().subscribe((data:any)=>{

      this.requests = data.data;
      console.log("requests ======",this.requests);
      this.requestservice.setUser(this.requests);
    });
  }
  AcceptorRejectConnection(status: any, requestId: any,index:any) {
    this.authservice.AcceptorRejectConnection(status, requestId).subscribe(
      (res) => {
        console.log('Response ===', res);
        this.requests.splice(index, 1);

      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}