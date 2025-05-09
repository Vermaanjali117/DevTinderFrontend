import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedserviceService {

   private feedsubject = new BehaviorSubject<any>([]);
   public user$ = this.feedsubject.asObservable();
   constructor() {}
   setfeeddata(user: any) {
     this.feedsubject.next(user);
   }
 
   getfeeddata() {
     return this.feedsubject.value;
   }
 
   clearfeeddata() {
     this.feedsubject.next(null);
   }
   removeFeedItemById(id: string) {
    const currentData = this.feedsubject.getValue(); // Get the current 
    // state
    console.log("currentData=",currentData);
    if (currentData) {
      const updatedData = currentData.filter((item: { _id: string }) => item._id !== id); // Remove the item
      this.feedsubject.next(updatedData); // Update the BehaviorSubject
      console.log(this.feedsubject.getValue());
    }
  }
}
