import { configureStore } from "@reduxjs/toolkit";
import favortireReducer from "../features/favotire"

const store = configureStore({
    reducer : {Favorite : favortireReducer }
})

export default store