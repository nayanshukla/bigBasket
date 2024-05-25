import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getCategory(){
    return this.http.get('https://87a36cc3-752f-4506-8ebe-f0ab48449e24.mock.pstmn.io');
  }

  getProducts(){
    return this.http.get('');
  }

  saveProduct(obj:any){
    return this.http.post('',obj);
  }
}
