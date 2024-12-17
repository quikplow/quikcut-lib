/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config { }
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pricing-config".
 */
export interface PricingConfig {
  id: string;
  mowing?: {
    label: string;
    basePrice?: number;
    pricePer500SquareFeet?: number;
    pricingPlan: 'flatFee' | 'pricedPerSquareFoot';
  };
  additionalServices?: {
    weedWhipping?: {
      enableService?: boolean;
      label: string;
      basePrice?: number;
      pricePer500SquareFeet?: number;
      pricingPlan: 'flatFee' | 'pricedPerSquareFoot';
    };
    leafRemoval?: {
      enableService?: boolean;
      label: string;
      basePrice?: number;
      pricePer500SquareFeet?: number;
      pricingPlan: 'flatFee' | 'pricedPerSquareFoot';
    };
    bagGrass?: {
      enableService?: boolean;
      label: string;
      basePrice?: number;
      pricePer500SquareFeet?: number;
      pricingPlan: 'flatFee' | 'pricedPerSquareFoot';
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "admins".
 */
export interface Admin {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-submissions".
 */
export interface ContactSubmission {
  id: string;
  topic: 'general' | 'requestIssue' | 'billing';
  user:
  | {
    value: string | Customer;
    relationTo: 'customers';
  }
  | {
    value: string | Provider;
    relationTo: 'providers';
  };
  message: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customers".
 */
export interface Customer {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  firstName: string;
  lastName: string;
  phone: string;
  addresses?: {
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
    isServiceable?: boolean;
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
    id?: string;
  }[];
  photo?: string | Media;
  reviews?: {
    request: string | Request;
    provider: string | Provider;
    stars: number;
    id?: string;
  }[];
  stripeCustomerID?: string;
  providersCanContact?: boolean;
  termsAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    card?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    square?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  alt: string;
  owner?:
  | {
    value: string | Customer;
    relationTo: 'customers';
  }
  | {
    value: string | Provider;
    relationTo: 'providers';
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "providers".
 */
export interface Provider {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  firstName: string;
  lastName: string;
  is18YearsOrOlder?: boolean;
  phone: string;
  zip?: string;
  equipment?: {
    pushMower?: boolean;
    ridingMower?: boolean;
    stringTrimmer?: boolean;
    leafBlower?: boolean;
  };
  serviceOfferings?: {
    mowing?: boolean;
    baggingGrass?: boolean;
    edging?: boolean;
    leafRemoval?: boolean;
  };
  coordinates?: [number, number];
  vehicle?: {
    make?: string;
    model?: string;
    year?: number;
    color?: string;
    plate?: string;
  };
  photo?: string | Media;
  insurance?: string | Media;
  license?: string | Media;
  reviews?: {
    request: string | Request;
    customer: string | Customer;
    stars: number;
    id?: string;
  }[];
  accountPreferences?: {
    textMeAboutNewRequests?: 'yes' | 'no';
  };
  acceptanceStatus?: 'notRequested' | 'requested' | 'approved' | 'rejected';
  rejectionReason?: 'insurance' | 'equipment' | 'license' | 'background' | 'banned';
  travelDistance?: '20' | '30' | '40' | '50' | '60' | '70';
  stripeDetails?: {
    accountID?: string;
    payoutsEnabled?: boolean;
  };
  termsAccepted: boolean;
  activationRequestStep?: number;
  lastTextedAboutOpenRequests?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "requests".
 */
export interface Request {
  id: string;
  customer: string | Customer;
  provider?: string | Provider;
  isGrassOvergrown: boolean;
  additionalServices?: {
    weedWhipping?: boolean;
    leafRemoval?: boolean;
    bagGrass?: boolean;
  };
  address: {
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
    isServiceable?: boolean;
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
  };
  finishedPhoto?: string | Media;
  pricingConfig?: {
    mowing?: {
      label: string;
      basePrice?: number;
      pricePer500SquareFeet?: number;
      pricingPlan: 'flatFee' | 'pricedPerSquareFoot';
    };
    additionalServices?: {
      weedWhipping?: {
        enableService?: boolean;
        label: string;
        basePrice?: number;
        pricePer500SquareFeet?: number;
        pricingPlan: 'flatFee' | 'pricedPerSquareFoot';
      };
      leafRemoval?: {
        enableService?: boolean;
        label: string;
        basePrice?: number;
        pricePer500SquareFeet?: number;
        pricingPlan: 'flatFee' | 'pricedPerSquareFoot';
      };
      bagGrass?: {
        enableService?: boolean;
        label: string;
        basePrice?: number;
        pricePer500SquareFeet?: number;
        pricingPlan: 'flatFee' | 'pricedPerSquareFoot';
      };
    };
  };
  reviewsSubmitted?: {
    byCustomer?: boolean;
    byProvider?: boolean;
  };
  activityTimeLog?: {
    requestedTime: string;
    acceptedTime?: string;
    onTheWayTime?: string;
    startedTime?: string;
    completedTime?: string;
    canceledTime?: string;
  };
  status: 'open' | 'accepted' | 'onTheWay' | 'inProgress' | 'completed' | 'canceled';
  cost?: number;
  applicationFee?: number;
  canceledBy?: 'customer' | 'provider';
  stripePaymentIntentID?: string;
  stripePaymentIntentHistory?: {
    paymentIntentID?: string;
    provider?: string | Provider;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-regions".
 */
export interface ServiceRegion {
  id: string;
  title?: string;
  coordinates?: [number, number];
  createdAt: string;
  updatedAt: string;
}