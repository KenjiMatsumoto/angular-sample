import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    public id: number;
    id2: number;

    products: Product[] = null;
    constructor() {}

    ngOnInit() {
        this.id = 15;
        this.id2 = 10;

        setTimeout(() => {
            this.products = [
                new Product(
                    1,
                    'テスト商品',
                    3800,
                    'テストで追加した商品です。'
                ),
                new Product(
                    2,
                    'AngularDesignPattern',
                    4000,
                    'Angularでデザインパターンを極めるための指南書'
                ),
                new Product(
                    3,
                    'angularQuest',
                    640,
                    'Angularを極めるため旅にでる少年、その先に待つものとは…。'
                ),
            ];
        }, 1000);
    }
}
