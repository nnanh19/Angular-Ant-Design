import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ProductDetailSiteComponent implements OnInit {
  product!: IProduct
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id : any=  this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe( product => this.product = product)
  }

}
