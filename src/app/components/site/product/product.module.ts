import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSiteRoutingModule } from './product-routing.module';
import { ProductDetailSiteComponent } from './detail/detail.component';
import { ListProductSiteComponent } from './list/list.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAnchorComponent, NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NgxPaginationModule } from 'ngx-pagination';

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
    NzTypographyModule,
    NzCardModule,
    NzButtonModule,
    NzModalModule,
    NzCarouselModule,
    NzRadioModule,
    NgxPaginationModule,
  ]
})
export class ProductSiteModule { }
