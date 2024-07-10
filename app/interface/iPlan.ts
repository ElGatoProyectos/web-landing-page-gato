export interface IPlan {
    name: string;
    descriptionCorta: string;
    description?: string;
    details:  string[];
    price: number;
    priceTrimestral?: string;
    color: string;
    word: string;
}