import { Component, OnInit ,ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';
import { FeedserviceService } from 'src/Services/feedservice.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feeddata:any=[];
  constructor(public authservice:AuthService, public feedservice :FeedserviceService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
   this.Fetchfeeddata();
   this.subscribeToFeedData();
  }

Fetchfeeddata(){
   this.authservice.getfeeddata().subscribe((res:any)=>{
    this.feeddata = res;
    this.feedservice.setfeeddata(this.feeddata);
    
   })
   
}


subscribeToFeedData() {
  this.feedservice.user$.subscribe((data) => {
    this.feeddata = data || []; // Update the local state with the latest data
    this.cdr.detectChanges();
  });
}


// removeCard(id: string) {
//   this.feedservice.removeFeedItemById(id);
// }
}
