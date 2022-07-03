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
    toggleSelectedOf: (state, action) =>{
      const item = state.itemsList[action.payload];
      item.selected = !item.selected;
    },
    /**
     *
     * @param {*} state
     * @param {*} action
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
  },
});

export const { toggleSelectedOf, addItem } = itemSlice.actions;

export default itemSlice.reducer;
