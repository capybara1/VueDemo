import { expect } from "chai";
import { mapToRepresentationModel } from "@/shared/converters";
import { TODAY } from "@/shared/utils";

describe("converters.js", () => {
  it("mapToRepresentationModel converts simple task properly", () => {
    const result = mapToRepresentationModel({
      id: "1",
      label: "test",
      due: TODAY
    });
    expect(result).to.eql({ label: "test" });
  });

  it("mapToRepresentationModel converts task with special due properly", () => {
    const result = mapToRepresentationModel({
      id: "1",
      label: "test",
      due: "another day"
    });
    expect(result).to.eql({ label: "test", due: "another day" });
  });
});
