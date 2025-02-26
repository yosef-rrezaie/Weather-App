import { configureStore } from "@reduxjs/toolkit";
import favortireReducer from "../feautures/favotire"

const store = configureStore({
    reducer : {Favorite : favortireReducer }
})

export default store