import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IProduct } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  ListProducts! : IProduct[]
  constructor(
    private productService: ProductService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.ListProducts = products)
  }
  onHandlerRemove(id : number){
    this.ListProducts = this.ListProducts.filter(product => product.id !== id)
    // this.productService.removeProduct(id).subscribe(() => console.log('Xóa thành công'))
    this.notification.create(
      'success',
      'Xóa thành công',
      ''
    );
  }

}
