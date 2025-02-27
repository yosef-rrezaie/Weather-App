import { configureStore } from "@reduxjs/toolkit";
import favortireReducer from "../feautures/favotire"
import serachRecentlyReducer from "../feautures/serachRecently"

const store = configureStore({
    reducer : {Favorite : favortireReducer , SearchRecently : serachRecentlyReducer  }
})

export default store