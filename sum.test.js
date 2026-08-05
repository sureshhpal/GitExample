const add = require("./sum");

test("Adding 10 + 20", () => {
    expect(add(10,20)).toBe(30);
});