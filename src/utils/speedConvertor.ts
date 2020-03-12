const CONST_MILES_IN_METRE = 0.000621371192237334;

export const convertSpeedFromMetresToMiles = (speed: number) =>
  (speed * CONST_MILES_IN_METRE).toFixed(4);
