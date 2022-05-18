import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProductService } from '../../all-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:AllProductService) { }
  id:string;
  product:any;
  name:string;
  category:string;
  price:string;
  model:string;
  release_date:string;
  units:string;
  desc:string;

  ngOnInit(): void {
   this.route.params.subscribe(prod =>{
    console.warn("PID coming from list",prod['id'])
    this.id = prod['id']
   })



   this.service.getProductById(this.id).subscribe(data =>
    {
      this.product = data
      console.warn("GET PROD BY ID ",this.product.name)

      for(let p of this.product)
      { 
        console.warn("PID = ",p.id)
        if(p.id == this.id)
        {
          this.name = p.name
          this.category = p.category
          var a = p.price * 77
          this.price = a.toString()
          this.model = p.model_no
          this.release_date = p.release_date
          this.units = p.units
          this.desc = p.desc

        }
      }
    })

    console.warn("PRODUCT DATA ",this.product['name'])
  

    
  }



}
