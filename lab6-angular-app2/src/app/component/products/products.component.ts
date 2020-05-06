import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductService, private cartService: CartService) { 

  }

  ngOnInit(): void {
  }

  getAllProduct(){
    return this.productService.getAllProduct();
  }

  addToCart(p_id: number){
    this.cartService.add(p_id);
  }


}
