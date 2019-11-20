import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    public id: number;
    id2: number;

    products: Product[] = null;
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.id = 15;
        this.id2 = 10;

        setTimeout(() => {
            this.productService
                .getProductList()
                .subscribe((products: Product[]) => {
                    this.products = products;
                });
        }, 1000);
    }
}
