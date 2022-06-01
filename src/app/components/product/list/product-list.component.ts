import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IProduct } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ListProducts! : IProduct[]
  searchValue = ''
  visible = false
  listOfDisplayData! :IProduct[]
  constructor(
    private productService: ProductService,
    private notification: NzNotificationService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.ListProducts = products
      this.listOfDisplayData = [...this.ListProducts];
    })
  }
  onHandlerRemove(id : number){
    this.listOfDisplayData = this.ListProducts.filter(product => product.id !== id)
    this.productService.removeProduct(id).subscribe(() => console.log('Xóa thành công'))
    this.notification.create(
      'success',
      'Xóa thành công',
      ''
    );
  }
  nzOkText = 'a'
  cancel(): void {
    this.nzMessageService.info('Hủy thành công');
  }
  
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  searchKeyDown(e:any){
    if(e.key === 'Enter'){
      this.search()
    }
  }
  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.ListProducts.filter((item: any) => item.name.indexOf(this.searchValue) !== -1);
  }

}
