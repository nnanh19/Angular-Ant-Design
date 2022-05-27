import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundpageComponent } from '../notfoundpage/notfoundpage.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'product' , loadChildren: () => import('./../product/product.module').then(m => m.ProductModule)},
      { path: '' , component: NotfoundpageComponent, pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
