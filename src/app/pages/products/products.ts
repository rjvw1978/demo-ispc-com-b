import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  gallery:any[] = [];

  constructor(private productService:ProductService, private cdr: ChangeDetectorRef){

  }

  ngOnInit(): void {
     this.productService.obtenerListaProductos().subscribe({
      next: (data) => 
        { console.log(data);
          this.gallery = data;
        },
      error: (e) => console.error(e),
      complete: () => 
        { this.cdr.detectChanges();
          console.info('complete');} 
    });
  }
    
  }

