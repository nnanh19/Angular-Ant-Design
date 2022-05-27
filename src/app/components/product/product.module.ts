import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './list/product-list.component';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzNotificationServiceModule } from 'ng-zorro-antd/notification';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    NewComponent 
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NzTableModule, 
    NzDividerModule, 
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzNotificationServiceModule
  ],
  exports: [
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
