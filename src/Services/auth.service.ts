import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
loginpost(sync:any){
   return  this.http.post('http://localhost:3000/login',sync ,{
      withCredentials: true
    })
   }


GetUserCredentials(){
  return  this.http.get('http://localhost:3000/profile/view' ,{
    withCredentials: true
  })
}
Logout(){
  return  this.http.post('http://localhost:3000/logout' , {}, {
    withCredentials: true
  })
}

getfeeddata(){
  return  this.http.get('http://localhost:3000/user/feed' ,{
    withCredentials: true
  })
}
updatedata(sync:any){
  return  this.http.patch('http://localhost:3000/profile/edit' ,sync,{
    withCredentials: true
  })
}
getConnections(){
return this.http.get('http://localhost:3000/user/connections',{
  withCredentials:true
})
}
getpendingrequests(){
  return this.http.get('http://localhost:3000/user/request/recieved',{
    withCredentials:true
  })
}

getrequests(){
  return this.http.get('http://localhost:3000/user/request/recieved',{
    withCredentials:true
  })
}


AcceptorRejectConnection(status: string, requestId: string) {
  return this.http.post(`http://localhost:3000/request/review/${status}/${requestId}`, {}, {
    withCredentials: true
  });
}

SendorIgnoreConnection(status: string, requestId: string) {
  return this.http.post(`http://localhost:3000/request/send/${status}/${requestId}`, {}, {
    withCredentials: true
  });


}


Signuppost(sync:any){
  return this.http.post('http://localhost:3000/signup',sync, {
    withCredentials: true
  })
}
}
