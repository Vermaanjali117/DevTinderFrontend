import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';
import { ConnectionsService } from 'src/Services/connections.service';
@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css'],
})
export class ConnectionsComponent implements OnInit {
  connections: any;
  pendingRequests: any;
  dataarr:any=[];
  constructor(public authservice: AuthService ,public connectionservice:ConnectionsService) {}
  ngOnInit(): void {
    this.getConnections();
  }
  getConnections() {
    this.authservice.getConnections().subscribe((data:any)=>{
      this.connections = data.connections;
      for(let i=0;i<this.connections.length;i++){
        this.dataarr.push(this.connections[i].fromUserId)
      }
      console.log("data==",this.dataarr)
      this.connectionservice.setUser(this.dataarr);
    });
  }
}
