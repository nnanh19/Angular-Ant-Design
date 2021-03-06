import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListProductSiteComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
 
  totalLength: any 
  page: number = 1

  products! : IProduct[]
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
      this.totalLength = products.length
    })
  }

}
