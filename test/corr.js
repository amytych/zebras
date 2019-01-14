const assert = require("assert")

const Z = require("../zebras.js")

describe("corr", function() {
  it("returns correlation of two series", function() {
    assert.strictEqual(
      Z.corr([10, 15, 20, 25, 50, 55], [12, 18, 34, 52, 71, 86]),
      0.969035563335365
    )
  })
  it("returns error message when arrays don't have equal length", function() {
    assert.strictEqual(
      Z.corr([10, 15, 20, 25, 50, 55], [34, 52, 71, 86]),
      "Arrays are not the same length"
    )
  })
})
