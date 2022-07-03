import itemReducer, { individualDeletion } from "./itemSlice";

describe("items", () => {
  it("delete the item", () => {
    const item = {
      content: "anything",
      id: 0,
      selected: false,
    };
    const actual = itemReducer(individualDeletion(item.id));
    expect(actual).toEqual([]);
  });
});
