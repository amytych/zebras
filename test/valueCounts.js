const assert = require("assert")

const Z = require("../zebras.js")

describe("valueCounts", () => {
  it("counts numbers of occurences of each value in the array", () => {
    const c = Z.valueCounts([1, 1, 3])
    assert.strictEqual(typeof c, "object")
    assert.strictEqual(c[1], 2)
    assert.strictEqual(c[3], 1)
  })
})
