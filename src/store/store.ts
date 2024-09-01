import { combineReducers, configureStore } from "@reduxjs/toolkit";
import changeReducer from "./slices/changeSlice.ts";
import searchReducer from "./slices/searchSlice.ts";
import aboutReducer from "./slices/aboutSlice.ts";
import favoritesReducer from "./slices/favoritesSlice.ts";

const rootReducer = combineReducers({
  change: changeReducer,
  search: searchReducer,
  about: aboutReducer,
  favorites: favoritesReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
