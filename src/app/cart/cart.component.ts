import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../product.service';
import { IProduct } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:any={}
  constructor(private ProductsService :ProductsService ,
    private route:ActivatedRoute) { }

  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ProductsService.getProductById(id!).subscribe({next:(data)=>{
      this.product=data;
    }})
  }

}
