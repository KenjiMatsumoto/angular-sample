import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder
  ) { }
  productForm = this.fb.group({
    id: [''],
    name: [''],
    price: ['', Validators.min(100)],
    description: ['']
  });
  product: Product;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productService
        .getProduct(params.id)
        .subscribe((product: Product) => {
          this.productForm.setValue({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description
          });
        });
    });
    console.log(this.productForm.controls.id.value);
  }

  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }

  saveProduct(): void {
    if (this.productForm.valid) {
      const { id, name, price, description } = this.productForm.getRawValue(); // <= 追加
      this.productService.update(new Product(id, name, price, description)); // <= 追加
      this.router.navigate(['/products', this.productForm.controls.id.value]); // <= 変更
    }
  }
}
