import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  validateForm!: FormGroup

  submitForm(): void {
    if (this.validateForm.valid) {
      this.productService.createProduct(this.validateForm.value).subscribe(() =>{
        this.router.navigateByUrl("/admin/product")
        this.notification.create(
          'success',
          'Sửa thành công',
          ''
        );
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  statusChange(value: boolean): void {
    // this.validateForm.get('note')!.setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }

  constructor( 
    private fb: FormBuilder, 
    private productService: ProductService,
    private notification: NzNotificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      desc: [null, [Validators.required]],
      img: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
  }
}
