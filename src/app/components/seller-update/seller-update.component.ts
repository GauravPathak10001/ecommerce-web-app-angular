import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productType } from 'src/app/interfaces/productType';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-update',
  templateUrl: './seller-update.component.html',
  styleUrls: ['./seller-update.component.css']
})
export class SellerUpdateComponent implements OnInit{
  productMessage:undefined | String;
  productData:productType | undefined;
  constructor(private route: ActivatedRoute,private product:ProductService,private router: Router){}
 ngOnInit(): void {
   let productId=this.route.snapshot.paramMap.get('id');
 productId && this.product.getProduct(productId).subscribe((result)=>{
this.productData=result; 
});
 } 
 submit(data:productType){
   if(this.productData){
    data.id=this.productData.id;
   }
  this.product.updateProduct(data).subscribe((result)=>{
     
      if(result){
        this.productMessage="Product upated successfully";
      }
    });
  setTimeout(()=>{
    this.productMessage=undefined;    
  },3000);
  }
}
