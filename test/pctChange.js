const assert = require("assert")

const Z = require("../zebras.js")

describe("pctChange", function() {
  it("calculates percent changes between values in the order of the input series", function() {
    assert.deepStrictEqual(Z.pctChange([10, 15, 20, 25, 50, 55]), [
      NaN,
      0.5,
      0.33333333333333326,
      0.25,
      1,
      0.10000000000000009,
    ])
  })
})
