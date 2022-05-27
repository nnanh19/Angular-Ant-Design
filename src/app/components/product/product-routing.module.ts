import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./detail/product-detail.component";
import { ProductListComponent } from "./list/product-list.component";
import { NewComponent } from "./new/new.component";

const routes : Routes = [
    {
      path: '',
      component: ProductListComponent
    },
    {
      path: 'new',
      component: NewComponent
    },
    {
      path: ':id',
      component: ProductDetailComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ProductRoutingModule { }