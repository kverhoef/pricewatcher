export interface Pricewatch {
    id? :string;
    name?: string;
    url?: string;
    xpath?: string;
    initialValue?: number;
    currentValue?: number;
    lowestValue?: number;
    highestValue?: number;
    alertValue?: number;
    alertActive?: boolean;
}
