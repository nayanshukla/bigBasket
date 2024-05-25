import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  isSidePanelOpen: boolean = false;

  productObj: any = {
    "productId" : 0,
    "productSku" : "",
    "productName" : "",
    "productPrice" : 0,
    "productShortName" : "",
    "productDescription" : "",
    "createdDate" : new Date(),
    "deliveryTimeSpan" : "",
    "categoryId" : 0,
    "productImageUrl": ""
  };

  categoryList: any[] = []
  productList: any[] = []

  constructor(private productServ : ProductService){

  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProducts();
  }

  getAllProducts(){
    this.productServ.getProducts().subscribe((res:any) => {
      this.productList = res;
  })}

  getAllCategory(){
    this.productServ.getCategory().subscribe((res:any) => {
      this.categoryList = res.data;
  })}

  onSave(){
    this.productServ.saveProduct(this.productObj).subscribe((res:any) => {
      if(res.result){
        alert('Product Created')
        this.getAllProducts();
      }else{
        alert(res.message)
      }
    })
  }
  
  openSidePanel(){
    this.isSidePanelOpen = true;
  }

  closeSidePanel(){
    this.isSidePanelOpen = false;
  }


}

