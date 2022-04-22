import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class AllProductService {

  constructor(private http:HttpClient) { }


  // getAllProducts():Observable<Product[]>{
  //   const url = "http://localhost:3000/Products"

  //   return this.http.get<Product[]>(url);
  // }

  
  url = "http://localhost:3000/Products"

  getAllProducts()
  {
    return this.http.get(this.url);
  }


  saveProduct(data:any)
  {
    return this.http.post(this.url,data)

  }


  getProductById(id:any){
    let url1 = "http://localhost:3000/Products/".concat(id)
    
    console.warn("URL 1",url1)
    return this.http.get(this.url);

  }
}
