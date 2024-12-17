import { propertyTypeOptions, PropertyTypes, StatusTypes, statusTypes } from "../fieldUtils";

export function isValidPropertyType(value: string): value is PropertyTypes {
  return propertyTypeOptions.includes(value as PropertyTypes);
}

export function isValidStatusType(value: string): value is StatusTypes {
  return statusTypes.includes(value as StatusTypes);
}
