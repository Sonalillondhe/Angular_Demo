import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  selectedProductId:string|null=null;
  
  //practice
  price:string|null=null;

  constructor(private route:ActivatedRoute){
    console.log("Activated Route" ,route);

}
  ngOnInit(): void {

       this.selectedProductId=this.route.snapshot.paramMap.get('id');
       console.log("selected id" ,this.selectedProductId);

       this.price =this.route.snapshot.paramMap.get('price');
       console.log("selected price" ,this.price);
  }

}
