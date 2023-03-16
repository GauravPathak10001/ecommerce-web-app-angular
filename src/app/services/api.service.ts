import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignUp } from '../interfaces/data-type1';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import { logindata } from '../interfaces/login-type';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isSellerLoggedIn=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient, private router:Router) { }
  url='http://localhost:3000/seller';
 
  userSignUp(data:SignUp)
  {
  let result= this.http.post(this.url,data,{observe:'response'})
  .subscribe((result)=>
  {
this.isSellerLoggedIn.next(true);
localStorage.setItem('seller',JSON.stringify(result.body));
this.router.navigate(['seller-home']);
  });
}
reloadSeller(){
  if(localStorage.getItem('seller')){
    this.isSellerLoggedIn.next(true);
    this.router.navigate(['seller-home']);
  }
}

userLogin(data:logindata){
  console.log(data);
  //api call code.
  this.http.get(`http://localhost:3000/seller?emailId=${data.emailId}&?password=${data.password}`,
  {observe:'response'}
  ).subscribe((result:any)=>{
    console.log(result);
    if(result){
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
      console.log("Login Successfull");
    }
    else{
      console.log("Login Failed");
    }
    })
  }
}
