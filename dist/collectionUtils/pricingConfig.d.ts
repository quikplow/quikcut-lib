export type ServicePricingModel = {
    enableService?: boolean;
    label: string;
    basePrice?: number;
    pricePer500SquareFeet?: number;
    pricingPlan: 'pricedPerSquareFoot';
} | {
    enableService?: boolean;
    label: string;
    basePrice?: number;
    pricingPlan: 'flatFee';
};
