import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
    constructor(
        private router: Router,
        private productService: ProductService
    ) {}
    product: Product;
    ngOnInit() {
        this.productService.getProduct(2).subscribe((product: Product) => {
            this.product = product;
        });
    }

    saveProduct() {
        this.router.navigate(['/products']);
    }
}
