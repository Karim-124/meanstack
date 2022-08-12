import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';
import { IProduct } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = []
  private _searchFilter: string = '';

  filteredProductsbySearch: IProduct[] = [ ];


  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({next:(data)=>{
      console.log(data)
      this.products=data
    }})
  }

  get searchFilter(): string {
    return this._searchFilter;
  }

  set searchFilter(value: string) {
    this._searchFilter = value;
    this.filteredProductsbySearch = this.filterProduct(value);
  }

  filterProduct(val: string) {
    return this.products.filter((product) =>
      product.category.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );
  }

}
