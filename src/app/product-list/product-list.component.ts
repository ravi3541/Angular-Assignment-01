import { Component, OnInit } from '@angular/core';
import { AllProductService } from '../all-product.service';
//import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  
  //constructor(private prod_ser:AllProductService) { }

  //allProducts:Product[];  

  // ngOnInit(): void {
  //   this.prod_ser.getAllProducts().subscribe( data => {
  //     this.allProducts = data;

  //     console.log(this.allProducts)
       
  //   })
  // }


  constructor(private prod_ser:AllProductService) { }
  
  allProducts:any;

  ngOnInit(): void {
    this.prod_ser.getAllProducts().subscribe(data =>
      {
        this.allProducts = data
      })
    
  }

}
