import { Component, OnInit } from '@angular/core';
import { productType } from 'src/app/interfaces/productType';
import { ProductService } from 'src/app/services/product.service';
import { FaConfig } from '@fortawesome/angular-fontawesome/config';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
productList:productType[] | undefined
productDeleteMsg:string | undefined;
constructor(private product:ProductService){}
ngOnInit():void{
  this.list();
}

deleteProduct(id:number){
this.product.deleteProduct(id).subscribe((result)=>{
if(result){
this.productDeleteMsg="Product Delete Successfully";
}
this.list();
})
setTimeout(()=>(this.productDeleteMsg=undefined),3000);
}

list(){
  this.product.productList().subscribe((result)=>{
    this.productList=result;
     });
}
}


