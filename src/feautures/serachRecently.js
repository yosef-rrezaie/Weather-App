import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchRecentlyObject: [],
};

const searchRecentlySlice = createSlice({
  name: "serachRecentlyComponent",
  initialState,
  reducers: {
    addserachRecently: (state, action) => {
      let isExist = state.searchRecentlyObject.some(
        (item) => item.data.name === action.payload.data.name
      );

      if (!isExist) {
        state.searchRecentlyObject.push(action.payload);
      }
    },
    removeserachRecently: (state, action) => {
      state.searchRecentlyObject = state.searchRecentlyObject.filter(
        (item) => item.data.name !== action.payload
      );
    },
  },
});

export default searchRecentlySlice.reducer;
export const { addserachRecently, removeserachRecently } =
  searchRecentlySlice.actions;
