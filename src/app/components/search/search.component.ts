import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productType } from 'src/app/interfaces/productType';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
searchResult: undefined | productType[]; 
  constructor(private activatedRoute: ActivatedRoute, private product: ProductService){}
  ngOnInit(): void {
  let query=this.activatedRoute.snapshot.paramMap.get('query');
  query && this.product.searchProducts(query).subscribe((result)=>{
    this.searchResult=result;
  });
}
}
