import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: any;
  token: string;
  

  constructor(private router:Router ,public local: LocalStorageService, private ps:ProductsService) {
    try{
      this.token = this.local.get('user').token;
      this.ps.getAllProducts(this.token).subscribe(
        data => {
          this.products = data;
        },
        err => {
          this.router.navigate(['/signin']);
        }
      );
  
    }catch(error){
      this.router.navigate(['/signin']);
      console.log(error);
    }
   }
  
  ngOnInit(): void {
  }

  signout(){
    this.local.clear();
    this.router.navigate(['/signin']);
  }
}
