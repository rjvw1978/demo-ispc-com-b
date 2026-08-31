import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  gallery:any=[]

  constructor(private productService:ProductService){

    this.gallery= this.productService.obtenerListaProductos();
    
  }

}
