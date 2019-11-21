import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private productService: ProductService
    ) {}
    product: Product;
    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.productService
                .getProduct(params.id)
                .subscribe((product: Product) => {
                    this.product = product;
                });
        });
    }

    saveProduct() {
        this.router.navigate(['/products']);
    }
}
