import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  validateForm!: FormGroup
  id : any = this.activatedRoute.snapshot.paramMap.get('id')

  submitForm(): void {
    if (this.validateForm.valid) {
      const product = {...this.validateForm.value, id: this.id}
      this.productService.updateProduct(product).subscribe( data => {
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
    private activatedRoute: ActivatedRoute,
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


    this.productService.getProduct(this.id).subscribe(product => {
      this.validateForm.get('name')!.setValue(product.name);
      this.validateForm.get('price')!.setValue(product.price);
      this.validateForm.get('img')!.setValue(product.img);
      this.validateForm.get('desc')!.setValue(product.desc);
      this.validateForm.get('quantity')!.setValue(product.quantity);
      this.validateForm.get('status')!.setValue(product.status);
    })
  }
  

}
