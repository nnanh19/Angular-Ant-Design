import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AdminRoutingModule } from './admin-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';

registerLocaleData(uk);


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: uk_UA }],
  bootstrap: [LayoutComponent]
})
export class AdminModule { }
