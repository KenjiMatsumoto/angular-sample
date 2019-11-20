import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    products = [
        new Product(1, 'テスト商品', 3800, 'テストで追加した商品です。'),
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
    constructor() {}

    getProductList(): Observable<Product[]> {
        return of(this.products);
    }
}
