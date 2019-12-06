const { fuelRequirement } = require('../src/index');


test('When mass is 12, fuel requirement is 2', () => {
  expect(fuelRequirement(12)).toBe(2);
});

test("When mass is 14, fuel requirement is still 2", () => {
  expect(fuelRequirement(14)).toBe(2);
});

test("When mass is 1969, fuel requirement is 654", () => {
  expect(fuelRequirement(1969)).toBe(654);
});

test("When mass is 100756, fuel requirement is 33583", () => {
  expect(fuelRequirement(100756)).toBe(33583);
});