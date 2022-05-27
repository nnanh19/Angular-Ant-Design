import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SiteRoutingModule } from './site-routing.module';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [
    HomepageComponent,
    SiteLayoutComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    NzLayoutModule,
    NzGridModule,
    NzImageModule
  ]
})
export class SiteModule { }