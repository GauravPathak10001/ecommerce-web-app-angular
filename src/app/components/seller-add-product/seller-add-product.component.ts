import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productType } from 'src/app/interfaces/productType';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit{

  addproductMessage:string | undefined;
  constructor(private productService: ProductService, private router:Router){}

ngOnInit(): void {
  
}
submit(data:productType){
   this.productService.addProduct(data).subscribe((result)=>{
  if(result){
    this.addproductMessage="product added successfully";
  }
  setTimeout(()=>(this.addproductMessage=undefined),10000);
  this.router.navigate(['/seller-home']);
  });
  
  }
}
