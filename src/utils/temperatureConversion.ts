const ABSOLUTE_ZERO: number = 273.15;
const RATION_CELSIUS_TO_FAHRENHEIT = 5 / 9;
const FREEZING_POINT_OF_WATER_FAHRENHEIT = 32;

export const conversionKelvinToCelcium = (gradeKelvin: number): number =>
  Math.round(gradeKelvin - ABSOLUTE_ZERO);

export const conversionCelciumToFahrenheit = (gradeCelsium: number): number =>
  Math.round(gradeCelsium / RATION_CELSIUS_TO_FAHRENHEIT + FREEZING_POINT_OF_WATER_FAHRENHEIT);

export const conversionKelvinToFahrenheit = (gradeKelvin: number): number =>
  conversionCelciumToFahrenheit(conversionKelvinToCelcium(gradeKelvin));
