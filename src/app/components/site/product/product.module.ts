import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSiteComponent } from './product-site/product-site.component';
import { ProductSiteRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductSiteComponent
  ],
  imports: [
    CommonModule,
    ProductSiteRoutingModule
  ]
})
export class ProductSiteModule { }
