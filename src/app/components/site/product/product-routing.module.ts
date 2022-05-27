import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductSiteComponent } from "./product-site/product-site.component";

const routes : Routes = [
    {
      path: ':id',
      component: ProductSiteComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ProductSiteRoutingModule { }