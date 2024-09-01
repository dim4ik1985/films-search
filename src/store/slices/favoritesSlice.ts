import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilm } from "../../models/models.ts";

export interface IFavoritesState {
  filmsFavorites: IFilm[];
}

const initialState = {
  filmsFavorites: [] as IFilm[]
} as IFavoritesState;

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<IFilm>) => {
      state.filmsFavorites.push(action.payload);
    },
    removeFavorites: (state, action: PayloadAction<IFilm>) => {
      state.filmsFavorites = state.filmsFavorites.filter(
        (film) => film.imdbID !== action.payload.imdbID
      );
    }
  }
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
