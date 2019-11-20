import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    productMap: Map<string, any>;
    productOj: [string, any][];
    constructor() {}

    ngOnInit() {
        this.product = new Product(
            1,
            'testProduct',
            3800,
            'テストように作った商品です。'
        );

        this.productMap = new Map<string, any>();
        for (const [key, value] of Object.entries(this.product)) {
            console.log(key + ' ' + value);
            // Mapに入れ替えると順番がおかしくなる…。順番保障されている気がするんだが…。
            this.productMap.set(key, value);
        }
        this.productOj = Object.entries(this.product);
    }
}
