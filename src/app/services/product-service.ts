import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService  {

  private gallery:any;
  private url:string="http://localhost:3000/gallery";

  constructor(private  http: HttpClient)
  {

  }

  obtenerListaProductos():Observable<any>
  {
    return this.http.get(this.url);
  }

}
