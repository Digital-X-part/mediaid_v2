import cartSlice from "@/slices/cartSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "./storage";

const reducer = combineReducers({
  cartState: cartSlice,
});

const persistedReducer = persistReducer({ key: "root", storage }, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistedStore = persistStore(store);
