import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
loginpost(sync:any){
   return  this.http.post('/api/login',sync ,{
      withCredentials: true
    })
   }


GetUserCredentials(){
  return  this.http.get('/api/profile/view' ,{
    withCredentials: true
  })
}
Logout(){
  return  this.http.post('/api/logout' , {}, {
    withCredentials: true
  })
}

getfeeddata(){
  return  this.http.get('/api/user/feed' ,{
    withCredentials: true
  })
}
updatedata(sync:any){
  return  this.http.patch('/api/profile/edit' ,sync,{
    withCredentials: true
  })
}
getConnections(){
return this.http.get('/api/user/connections',{
  withCredentials:true
})
}
getpendingrequests(){
  return this.http.get('/api/user/request/recieved',{
    withCredentials:true
  })
}

getrequests(){
  return this.http.get('/api/user/request/recieved',{
    withCredentials:true
  })
}


AcceptorRejectConnection(status: string, requestId: string) {
  return this.http.post(`/api/request/review/${status}/${requestId}`, {}, {
    withCredentials: true
  });
}

SendorIgnoreConnection(status: string, requestId: string) {
  return this.http.post(`/api/request/send/${status}/${requestId}`, {}, {
    withCredentials: true
  });


}


Signuppost(sync:any){
  return this.http.post('/api/signup',sync, {
    withCredentials: true
  })
}
}
