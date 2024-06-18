import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private cliente: HttpClient) { }

  private urlBase: string = 'https://api.escuelajs.co/api/v1/products'

  getProductos(){
    this.cliente.get(this.urlBase).subscribe(productos => console.log(productos))
  }

}
