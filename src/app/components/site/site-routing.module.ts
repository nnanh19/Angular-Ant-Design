import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { SiteLayoutComponent } from "./site-layout/site-layout.component";


const routes : Routes = [
    {
      path: '',
      component: SiteLayoutComponent,
      children: [
        { path: 'product' , loadChildren: () => import('./../site/product/product.module').then(m => m.ProductSiteModule)},
        { path: 'home',component: HomepageComponent, },
        { path: '', redirectTo: 'home',pathMatch: 'full' }
      ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class SiteRoutingModule { }