const { randomArray } = require("./app");

test("randomArray(5, 5) should be return array length 5", () => {
  expect(randomArray(5, 5)).toHaveLength(5);
});
