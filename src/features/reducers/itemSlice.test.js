import itemReducer, { toggleSelectedOf, addItem } from "./itemSlice";

describe("item reducer", () => {
  it("should toggle selection", () => {
    const item = {
      content: "anything",
      selected: false,
    };
    const actual = itemReducer(toggleSelectedOf(item));
    expect(actual.selected.toEqual(true));
  });
});
