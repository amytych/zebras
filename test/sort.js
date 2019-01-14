const assert = require("assert")

const Z = require("../zebras.js")

describe("sort", function() {
  it("sorts dataframe rows according to a sorting function", function() {
    const df = [
      { label: "A", value: 7 },
      { label: "B", value: 2 },
      { label: "C", value: 75 },
    ]
    assert.deepStrictEqual(Z.sort((a, b) => b.value - a.value, df), [
      { label: "C", value: 75 },
      { label: "A", value: 7 },
      { label: "B", value: 2 },
    ])
  })
})
