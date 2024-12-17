export const statusTypes = ['open', 'accepted', 'onTheWay', 'inProgress', 'completed', 'canceled'] as const;
export type StatusTypes = typeof statusTypes[number];

export const propertyTypeOptions = ['commercial', 'residential'] as const;
export type PropertyTypes = typeof propertyTypeOptions[number];
