import { isEqualCollections } from './isEqualCollections';

export const isObjectEqual = (objectFirst: any, objectSecond: any) => {
  if (Object.keys(objectFirst).length !== Object.keys(objectSecond).length) {
    return false;
  }

  let result: boolean = true;

  Object.entries(objectFirst).forEach(([key, value]) => {
    const itemOpposite = objectSecond[key];
    if (typeof value === 'object' && typeof itemOpposite === 'object') {
      if (!isObjectEqual(value, itemOpposite)) {
        result = false;
      }
    } else if (Array.isArray(value) && Array.isArray(itemOpposite)) {
      if (!isEqualCollections(value, itemOpposite)) {
        result = false;
      }
    } else if (value !== itemOpposite) {
      result = false;
    }
  });

  return result;
};
