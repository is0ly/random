const { randomObjectOfDigit } = require("./random");

test("randomArray(5, 5) should be return array length 5", () => {
  expect(randomObjectOfDigit(5, 5)).toHaveLength(5);
});
