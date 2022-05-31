import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule
  ]
})
export class AuthModule { }
