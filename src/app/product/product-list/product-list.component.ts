import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    public id: number;
    id2: number;
    constructor() {}

    ngOnInit() {
        this.id = 15;
        this.id2 = 10;
    }
}
