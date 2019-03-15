import { expect } from "chai";
import { generateId } from "@/shared/utils";

describe("utils.js", () => {
  it("returns a nonempty id", () => {
    const result = generateId();
    expect(result).to.match(/[0-9a-f]+/i);
  });

  it("returns different values on subsequent calls", () => {
    const first = generateId();
    const second = generateId();
    expect(first).not.to.equal(second);
  });
});
