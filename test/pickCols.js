const assert = require("assert")

const Z = require("../zebras.js")

describe("pickCols", function() {
  it("selects a subset of columns", function() {
    const df = [
      { label: "A", value: 10, date: "2010-12-13" },
      { label: "B", value: 13, date: "2010-12-15" },
      { label: "C", value: 15, date: "2010-12-17" },
    ]
    assert.deepStrictEqual(Z.pickCols(["label", "value"], df), [
      { label: "A", value: 10 },
      { label: "B", value: 13 },
      { label: "C", value: 15 },
    ])
  })
})
