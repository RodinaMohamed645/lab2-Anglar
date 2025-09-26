import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  productList: IProduct[] = [
    {
      id: 1,
      name: "Laptop",
      quantity: 0,
      price: 1000,
      img: "images/Laptop.jpeg",
      cateogryID: 1
    },
    {
      id: 2,
      name: "Mobile",
      quantity: 4,
      price: 3000,
      img:"images/Mobile.jpeg",
      cateogryID: 2
    },
    {
      id: 3,
      name: "Laptop",
      quantity: 2,
      price: 1000,
      img:"images/Laptop.jpeg",
      cateogryID: 1
    },
    {
      id: 4,
      name: "Laptop",
      quantity: 4,
      price: 1000,
      img:"images/Laptop.jpeg",
      cateogryID: 1
    },
    {
      id: 5,
      name: "Laptop",
      quantity: 4,
      price: 1000,
      img:"images/Laptop.jpeg",
      cateogryID: 1
    },
    {
      id: 6,
      name: "Mobile",
      quantity: 4,
      price: 1000,
      img:"images/Mobile.jpeg",
      cateogryID: 2
    },
    {
      id: 7,
      name: "Tablet",
      quantity: 4,
      price: 1000,
      img:"images/Tablets.jpeg",
      cateogryID: 3
    },
    {
      id: 8,
      name: "Laptop",
      quantity: 4,
      price: 1000,
      img:"images/Laptop.jpeg",
      cateogryID: 1
    }
  ]
  categoryList:ICategory[]=[
    {
      id:0,
      name:"All Categiories"
    },
    {
      id:1,
      name:"Laptop"
    },
    {
      id:2,
      name:"Mobile"
    },
    {
      id:3,
      name:"Tablet"
    }
  ]
  
  buy(product:IProduct)
  {
     product.quantity--;
  }
  showDetails(product: IProduct) {
  alert(
    `Product Details:\n
    Name: ${product.name}\n
    Quantity: ${product.quantity}\n
    Price: ${product.price}\n
    Category ID: ${product.cateogryID}`
  );
}
searchText:string="";
selectedID:number=-1;
}
