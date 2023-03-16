import { Component, OnInit } from '@angular/core';
import { productType } from 'src/app/interfaces/productType';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  popularProducts: undefined | productType[];
  trendyproducts:undefined | productType[];
  constructor(private product: ProductService){}
  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      console.log(data);
      this.popularProducts=data;
    });
    this.product.trendyProducts().subscribe((data)=>{
this.trendyproducts=data;
    });
  }
}
