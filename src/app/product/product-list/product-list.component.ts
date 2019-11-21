import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

class ProductListElement extends Product {
    hovered: boolean;
}

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    public id: number;
    id2: number;

    products: Product[] = null;
    product: Product;
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.id = 15;
        this.id2 = 10;
        this.productService
            .getProductList()
            .subscribe((products: Product[]) => {
                this.products = products.map((product: Product) => {
                    return {
                        ...product,
                        hoverd: false
                    };
                });
            });
    }

    hovered(product: ProductListElement): void {
        product.hovered = true;
    }
    unhovered(product: ProductListElement): void {
        product.hovered = false;
    }
}
