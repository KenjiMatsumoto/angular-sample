import { Component, OnInit } from '@angular/core';
import { Product, ProductLabel } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    productMap: Map<string, any>;
    productOj: [string, any][];
    constructor(public productService: ProductService) {}
    keyOrder = [
        ProductLabel.id,
        ProductLabel.name,
        ProductLabel.price,
        ProductLabel.description,
    ];
    ngOnInit() {
        this.productService.getProduct(2).subscribe((product: any) => {
            this.product = product;
            // ここから下の処理は自分で勉強のため追記しただけなので削除してもよし
            // 削除した場合はHTMLも修正すること
            this.productMap = new Map<string, any>();
            for (const [key, value] of Object.entries(this.product)) {
                // console.log(key + ' ' + value);
                // Mapに入れ替えると順番がおかしくなる…。順番保障されている気がするんだが…。
                // 追記、Key値で勝手にソートされている模様、Key値を数値に変えて入れてみたところ順番通りに出るようになった
                let labelName = '';
                switch (key) {
                    case 'id':
                        labelName = ProductLabel.id;
                        break;
                    case 'name':
                        labelName = ProductLabel.name;
                        break;
                    case 'price':
                        labelName = ProductLabel.price;
                        break;
                    case 'description':
                        labelName = ProductLabel.description;
                        break;
                }
                this.productMap.set(labelName, value);
            }
            this.productOj = Object.entries(this.product);
        });
    }
}
