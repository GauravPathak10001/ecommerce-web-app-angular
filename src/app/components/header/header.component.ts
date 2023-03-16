import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { productType } from 'src/app/interfaces/productType';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType:string='';
  sellerName:string='';
  searchResult: undefined | productType[];
  constructor(private router:Router, private productService: ProductService) { }

  ngOnInit():void
{ 
this.router.events.subscribe((val:any)=>{
 if(val.url){
  if(localStorage.getItem('seller')  && val.url.includes('seller')){
  console.warn("Inside seller");
  this.menuType="seller";
  if(localStorage.getItem('seller')){
    let sellerStore=localStorage.getItem('seller');
    let sellerData=sellerStore  && JSON.parse(sellerStore)[0];
    this.sellerName=sellerData.name;
  }
  }
  else{
console.log("outside seller");
this.menuType='default';
  }
 }
})
}

logout(){
  localStorage.removeItem('seller');
  this.router.navigate(['/']);
}
searchproducts(query:KeyboardEvent){
if(query){
  const element=query.target as HTMLInputElement;
  this.productService.searchProducts(element.value).subscribe((data)=>{
    if(data.length>5){
    data.length=5;
    }
    
    this.searchResult=data;
  });
}
}
hideSearch(){
  this.searchResult=undefined;
}
submitSearch(val: string){
this.router.navigate([`search/${val}`]);
}
redirectToDetails(id:number){
  this.router.navigate(['/details/'+id]);
}
}
