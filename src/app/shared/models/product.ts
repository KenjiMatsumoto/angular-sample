export class Product {
    id: number;
    name: string;
    price: number;
    description: string;

    constructor(id: number, name: string, price: number, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

export enum ProductLabel {
    id = 'ID',
    name = '名前',
    price = '金額',
    description = '詳細',
}
