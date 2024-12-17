import { Media } from '../payload-types';

// maps to `Customer.address` & `Provider.address` in `../payload-collections`
// Payload does not generate field specific types, so we need to manually define it here
export type Address = {
  nickname?: string;
  type: 'residential' | 'commercial';
  line1: string;
  line2?: string;
  city: string;
  state:
  | 'AL'
  | 'AK'
  | 'AZ'
  | 'AR'
  | 'CA'
  | 'CO'
  | 'CT'
  | 'DE'
  | 'FL'
  | 'GA'
  | 'HI'
  | 'ID'
  | 'IL'
  | 'IN'
  | 'IA'
  | 'KS'
  | 'KY'
  | 'LA'
  | 'ME'
  | 'MD'
  | 'MA'
  | 'MI'
  | 'MN'
  | 'MS'
  | 'MO'
  | 'MT'
  | 'NE'
  | 'NV'
  | 'NH'
  | 'NJ'
  | 'NM'
  | 'NY'
  | 'NC'
  | 'ND'
  | 'OH'
  | 'OK'
  | 'OR'
  | 'PA'
  | 'RI'
  | 'SC'
  | 'SD'
  | 'TN'
  | 'TX'
  | 'UT'
  | 'VT'
  | 'VA'
  | 'WA'
  | 'WV'
  | 'WI'
  | 'WY';
  zip: string;
  geolocation?: [number, number];
  propertyDetails: {
    lawnCoordinates?: string;
    lawnSquareFootage?: number;
    isFenced?: boolean;
    fenceOpeningSize?: '24to36' | '36orMore';
    fenceCode?: string;
    hasSprinklers?: boolean;
    hasPets?: boolean;
    notes?: string;
    photo?: string | Media;
  };
}
