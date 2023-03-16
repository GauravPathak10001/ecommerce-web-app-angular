import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productType } from '../interfaces/productType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data:productType){
   return this.http.post(' http://localhost:3000/products',data);
  }
  productList(){
    return this.http.get<productType[]>(' http://localhost:3000/products');
  }
  deleteProduct(id:number){
   return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getProduct(id:string){
    return this.http.get<productType>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product:productType){
   return this.http.put(`http://localhost:3000/products/${product.id}`,product);
  }
  popularProducts(){
    return this.http.get<productType[]>(' http://localhost:3000/products?_limit=3');
  }
  trendyProducts(){
    return this.http.get<productType[]>(' http://localhost:3000/products?');
  }
  searchProducts(query:string){
    return this.http.get<productType[]>(` http://localhost:3000/products?q=${query}`);
  }
  
}
