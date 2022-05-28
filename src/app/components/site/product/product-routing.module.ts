import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailSiteComponent } from "./detail/detail.component";
import { ListProductSiteComponent } from "./list/list.component";

const routes : Routes = [
    {
      path: ':id',
      component: ProductDetailSiteComponent
    },
    {
        path: '',
        component: ListProductSiteComponent,
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ProductSiteRoutingModule { }