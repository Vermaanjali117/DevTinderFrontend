import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private requestsubject = new BehaviorSubject<any>(null);
  public user$ = this.requestsubject.asObservable();
  constructor() { }
  setUser(user: any) {
    this.requestsubject.next(user);
  }

  getUser() {
    return this.requestsubject.value;
  }

  clearUser() {
    this.requestsubject.next(null);
  }
}
