export interface infoSale {
    id: number;
    quantitySold: number;
    productSaleDTO: {
        id: number;
        name: string;
    };
}