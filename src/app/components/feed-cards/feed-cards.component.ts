import { Component, OnInit ,Input,OnChanges, SimpleChanges  } from '@angular/core';
import {FeedserviceService} from 'src/Services/feedservice.service';
import { AuthService } from 'src/Services/auth.service';
@Component({
  selector: 'app-feed-cards',
  templateUrl: './feed-cards.component.html',
  styleUrls: ['./feed-cards.component.css']
})
export class FeedCardsComponent  implements OnChanges {
  dataarr:any=[];
  @Input() userData: any;

  constructor(private feedService: FeedserviceService,public authservice:AuthService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userData']) {

    }
  }
  IgnoreorAccept(status: any, requestId: any ){
    this.authservice.SendorIgnoreConnection(status, requestId).subscribe(
      (res:any) => {
        this.feedService.removeFeedItemById(requestId);
        
      },
      (error: any) => {
        console.error('Error occurred:', error);
      }
    );
  }
}
