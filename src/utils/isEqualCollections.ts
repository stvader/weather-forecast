import { isObjectEqual } from './isObjectEqual';

export const isEqualCollections = (collectionFirst: Object[], collectionSecond: Object[]) => {
  if (collectionFirst.length !== collectionSecond.length) {
    return false;
  }

  let result: boolean = true;

  collectionFirst.forEach((item, i) => {
    const itemOpposite = collectionSecond[i];
    if (typeof item === 'object' && typeof itemOpposite === 'object') {
      if (!isObjectEqual(item, itemOpposite)) {
        result = false;
      }
    } else if (Array.isArray(item) && Array.isArray(itemOpposite)) {
      if (!isEqualCollections(item, itemOpposite)) {
        result = false;
      }
    } else if (item !== itemOpposite) {
      result = false;
    }
  });

  return result;
};
