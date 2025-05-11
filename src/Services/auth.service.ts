import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  loginpost(sync: any) {
    return this.http.post(`${this.apiUrl}`, sync, {
      withCredentials: true,
    });
  }

  GetUserCredentials() {
    return this.http.get(`${this.apiUrl}/profile/view`, {
      withCredentials: true,
    });
  }
  Logout() {
    return this.http.post(
      `${this.apiUrl}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
  }

  getfeeddata() {
    return this.http.get(`${this.apiUrl}/user/feed`, {
      withCredentials: true,
    });
  }
  updatedata(sync: any) {
    return this.http.patch(`${this.apiUrl}/profile/edit`, sync, {
      withCredentials: true,
    });
  }
  getConnections() {
    return this.http.get(`${this.apiUrl}/user/connections`, {
      withCredentials: true,
    });
  }
  getpendingrequests() {
    return this.http.get(`${this.apiUrl}/user/request/recieved`, {
      withCredentials: true,
    });
  }

  getrequests() {
    return this.http.get(`${this.apiUrl}/user/request/recieved`, {
      withCredentials: true,
    });
  }

  AcceptorRejectConnection(status: string, requestId: string) {
    return this.http.post(
      `${this.apiUrl}/request/review/${status}/${requestId}`,
      {},
      {
        withCredentials: true,
      }
    );
  }

  SendorIgnoreConnection(status: string, requestId: string) {
    return this.http.post(
      `${this.apiUrl}/request/send/${status}/${requestId}`,
      {},
      {
        withCredentials: true,
      }
    );
  }

  Signuppost(sync: any) {
    return this.http.post(`${this.apiUrl}/signup`, sync, {
      withCredentials: true,
    });
  }
}
