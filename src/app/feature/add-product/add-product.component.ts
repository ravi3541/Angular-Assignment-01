import { Component, OnInit } from '@angular/core';
import { AllProductService } from '../services/all-product.service';
import { FormGroup,FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  categories = [];
  today:any;
  productForm:FormGroup;
  saved:boolean;
  
  constructor(private service:AllProductService,private route:Router) {
    this.saved = false;
    this.categories = ['Kitchen Appliances','Electronics','Wearables', 'Fashion','Grocery','Travel']
   }

 


   defMaxDate()
   {
     let date:any = new Date()
     let dd:any = date.getDate()
     let mm:any = date.getMonth() + 1
     let yyyy:any = date.getFullYear()

     if(dd < 10){
      dd = "0" + dd;
     }

     if(mm < 10){
       mm = "0" + mm;
     }
     
     this.today = yyyy + "-" + mm  + "-" + dd;
     console.warn("Today = ",this.today)
   }
   

  ngOnInit(): void {

    this.defMaxDate();

    this.productForm = new FormGroup({
      id:new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_]*$')
        ]),

      name:new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(30)
        ]
      ),

      category:new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      price:new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('([0-9]*[.])?[0-9]+')
        ]
      ),

      model_no:new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_]*$')
        ]),

      release_date:new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      units:new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('[0-9]*')
        ]
      ),
      desc:new FormControl(
        null,
        [
          Validators.required,Validators.maxLength(150)
        ]
      )
  
     })
  }



  // Getters
  get name(){
    return this.productForm.get('name')
  }

  get id(){
    return this.productForm.get('id')
  }

  get category(){
    return this.productForm.get('category')    
  }

  get price(){
    return this.productForm.get('price')    
  }

  get model_no(){
    return this.productForm.get('model_no')    
  }

  get release_date(){
    return this.productForm.get('release_date')    
  }

  get units(){
    return this.productForm.get('units')    
  }


  get desc(){
    return this.productForm.get('desc')    
  }

  
  //Getting form data
  getProductDetails(data:any){
    console.warn(data)
    this.service.saveProduct(data).subscribe(result => 
      {
        console.warn("Data saved",result)
        this.saved = true;
        if(this.saved == true){
          
          console.log("Data Saved Successfully")
          this.route.navigate(['/feature/product-list'])
        }
        
      })

     

    
  }





}
