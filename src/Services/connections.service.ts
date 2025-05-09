import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  private connectionSubject = new BehaviorSubject<any>(null);
  public user$ = this.connectionSubject.asObservable();
  constructor() {}
  setUser(user:any) {
    this.connectionSubject.next(user);
  }

  getUser() {
    return this.connectionSubject.value;
  }

  clearUser() {
    this.connectionSubject.next(null);
  }
}
