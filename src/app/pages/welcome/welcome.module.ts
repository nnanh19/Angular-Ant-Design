import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzTableModule } from 'ng-zorro-antd/table';

import { NzDividerModule } from 'ng-zorro-antd/divider';

import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    WelcomeRoutingModule, 
    NzTableModule, 
    NzDividerModule, 
    CommonModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
