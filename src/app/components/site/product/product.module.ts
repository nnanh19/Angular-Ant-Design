import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSiteRoutingModule } from './product-routing.module';
import { ProductDetailSiteComponent } from './detail/detail.component';
import { ListProductSiteComponent } from './list/list.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAnchorComponent, NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [
    ProductDetailSiteComponent,
    ListProductSiteComponent,
  ],
  imports: [
    CommonModule,
    ProductSiteRoutingModule,
    NzGridModule,
    NzAnchorModule,
    NzImageModule,
  ]
})
export class ProductSiteModule { }
