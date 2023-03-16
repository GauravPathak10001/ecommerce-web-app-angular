import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {SignUp} from '../../interfaces/data-type1';
import { Router } from '@angular/router';
import { logindata } from 'src/app/interfaces/login-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
constructor(private seller:ApiService,private route:Router){}
showLogin=false;  
ngOnInit(): void {
    this.seller.reloadSeller();
   }
  signUp(data:SignUp){
  this.seller.userSignUp(data);
  }
  login(data:logindata){
this.seller.userLogin(data);
  }
  openLogin(){
this.showLogin=!this.showLogin;
  }
}
