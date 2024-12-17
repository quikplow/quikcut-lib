import { ServicePricingModel } from "../collectionUtils";
import { PricingConfig } from "../payload-types";
type CalculateServiceCost = (service: ServicePricingModel, totalSquareFeet?: number) => number;
export declare const calculateServiceCostAsCents: CalculateServiceCost;
type CalculateArgs = {
    pricingConfig: PricingConfig;
    additionalServicesRequested: Array<string>;
    totalSquareFeet: number;
    asDollars?: boolean;
};
export type CalculateRequestCostReturn = {
    totalCost: number;
    mowingCost: number;
    additionalServicesCost: number;
};
type CalculateRequestCost = (args: CalculateArgs) => CalculateRequestCostReturn;
export declare const calculateRequestCost: CalculateRequestCost;
export {};
