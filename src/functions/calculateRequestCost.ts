import { ServicePricingModel } from "../collectionUtils";
import { PricingConfig } from "../payload-types";
import { centsToDollars, dollarsToCents } from "./currency";

type CalculateServiceCost = (service: ServicePricingModel, totalSquareFeet?: number) => number;
export const calculateServiceCostAsCents: CalculateServiceCost = (service, totalSquareFeet) => {
  let serviceCost = dollarsToCents(service.basePrice || 0);

  if (service.pricingPlan === 'pricedPerSquareFoot') {
    const totalSquareFeetCost = (totalSquareFeet / 500) * service.pricePer500SquareFeet;
    serviceCost += dollarsToCents(totalSquareFeetCost);
  }

  return serviceCost;
};


type CalculateArgs = {
  pricingConfig: PricingConfig
  additionalServicesRequested: Array<string>;
  totalSquareFeet: number;
  asDollars?: boolean;
}
export type CalculateRequestCostReturn = {
  totalCost: number;
  mowingCost: number;
  additionalServicesCost: number;
}
type CalculateRequestCost = (args: CalculateArgs) => CalculateRequestCostReturn;
export const calculateRequestCost: CalculateRequestCost = ({ pricingConfig, additionalServicesRequested, totalSquareFeet, asDollars = true }) => {
  if (!pricingConfig) throw new Error('Pricing config not found');

  const {
    mowing,
    additionalServices: additionalServicesPricing,
  } = pricingConfig;

  const mowingCost = calculateServiceCostAsCents(mowing, totalSquareFeet);
  const additionalServicesCost = additionalServicesRequested.reduce((acc, service) => {
    const additionalService = additionalServicesPricing[service];
    if (!additionalService) throw new Error(`Additional service ${service} not found`);
    if (!additionalService.enableService) return acc;
    return acc + calculateServiceCostAsCents(additionalService, totalSquareFeet);
  }, 0);

  const totalCost = mowingCost + additionalServicesCost;

  return asDollars ? {
    totalCost: centsToDollars(totalCost),
    mowingCost: centsToDollars(mowingCost),
    additionalServicesCost: centsToDollars(additionalServicesCost),
  } : {
    totalCost,
    mowingCost,
    additionalServicesCost,
  }
};
