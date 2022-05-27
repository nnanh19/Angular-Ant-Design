import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/site/site.module').then(m => m.SiteModule) },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)},
  {path: '**', component: NotfoundpageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
