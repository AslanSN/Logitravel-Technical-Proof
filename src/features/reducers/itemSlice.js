import { createSlice } from "@reduxjs/toolkit";

const initialListValue = {
  content: "Add your item here...",
  id: 0,
  selected: false,
};

export const itemSlice = createSlice({
  name: "items",
  initialState: {
    itemsList: [initialListValue],
    isInitiated: false,
  },
  reducers: {
    /**
     * ! Toggles the selection of an item
     * * AslanSN - 22-07-03
     */
    toggleSelectedOf: (state, action) => {
      const item = state.itemsList[action.payload];
      item.selected = !item.selected;
    },
    /**
     * ! Adds an item to itemsList
     * * AslanSN - 22-07-03
     */
    addItem: (state, action) => {
      const content = action.payload,
        length = state.itemsList.length;

      let newItem = {
        content: content,
        id: 0,
        selected: false,
      };

      if (content !== "") {
        if (state.isInitiated === false) {
          state.itemsList[0] = newItem;
          state.isInitiated = !state.isInitiated;
        } else {
          state.itemsList.push(newItem);
          newItem.id = length;
        }
      }
    },
    /**
     * ! Erases all the selected items of the list
     * * AslanSN - 22-07-03
     */
    deleteSelected: (state) => {
      state.itemsList = state.itemsList.filter((item) => !item.selected);
    },
    /**
     * ! Erases on double click the item selected
     * * AslanSN - 22-07-03
     */
    individualDeletion: (state, action) => {
      state.itemsList = state.itemsList.filter(
        (item) => item !== state.itemsList[action.payload]
      );
    },
  },
});

export const { toggleSelectedOf, addItem, deleteSelected, individualDeletion } =
  itemSlice.actions;

export default itemSlice.reducer;
