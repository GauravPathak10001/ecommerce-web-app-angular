import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productType } from 'src/app/interfaces/productType';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
 productData: undefined | productType;
 productQuantity:number=1; 
 constructor(private activatedRoute: ActivatedRoute, private product: ProductService){}
ngOnInit(): void {
  let productId=this.activatedRoute.snapshot.paramMap.get('productId');
  productId && this.product.getProduct(productId).subscribe((result)=>{
    this.productData=result;
  });
}
handleQuantity(val:string){
  if(val=='max' && this.productQuantity<20){
this.productQuantity+=1;
  }
  else if(val=='min' && this.productQuantity>1){
    this.productQuantity-=1;
  }
}
}
