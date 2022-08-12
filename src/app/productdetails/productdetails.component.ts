import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-productdetailes',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailesComponent implements OnInit {

  product:any={}
  constructor(private route:ActivatedRoute,private productdetailsservieces:ProductsService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')
    this.productdetailsservieces.getProductById(id!).subscribe({next:(data)=>{
      console.log(data);
      this.product=data;
    }})
  }

 

}

