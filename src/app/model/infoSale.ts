export interface infoSale {
    product: {
        id: number;
        name: string;
        quantity: number;
        price: number;
        cost: number;
        description: string;
    };
    quantitySold: number;
    saleNumber: string;
}