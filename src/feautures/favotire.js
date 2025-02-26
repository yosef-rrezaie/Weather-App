import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favoriteObject: [],
};

const favotireSlice = createSlice({
  name: "favoriteComponent",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteObject.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteObject = state.favoriteObject.filter(
        (item) => item.lon !== action.payload
      );
    },
  },
});

export default favotireSlice.reducer;
export const { addFavorite , removeFavorite } = favotireSlice.actions;
