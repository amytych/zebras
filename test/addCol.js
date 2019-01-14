const assert = require("assert")

const Z = require("../zebras.js")

describe("addCol", function() {
  const df = [
    { label: "A", value: 7 },
    { label: "B", value: 2 },
    { label: "C", value: 75 },
  ]
  const series = ["2010-12-15", "2010-12-16", "2010-12-17"]
  it("adds a new column to a dataframe from an array", function() {
    assert.deepStrictEqual(Z.addCol("date", series, df), [
      { date: "2010-12-15", label: "A", value: 7 },
      { date: "2010-12-16", label: "B", value: 2 },
      { date: "2010-12-17", label: "C", value: 75 },
    ])
  })
  it("returns error message when arrays don't have equal length", function() {
    const series = ["2010-12-15"]
    assert.strictEqual(
      Z.addCol("date", series, df),
      "Arrays are not of equal length"
    )
  })
})
