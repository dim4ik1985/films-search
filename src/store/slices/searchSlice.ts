import { asyncThunkCreator, buildCreateSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilm } from "../../models/models.ts";

export interface ISearchState {
  isLoading?: boolean;
  error?: string;
  films: IFilm[];
}

const initialState = {
  isLoading: false,
  error: "",
  films: []
} as ISearchState;

const createSliceWithThunk = buildCreateSlice({
  creators: {
    asyncThunk: asyncThunkCreator
  }
});

export const searchSlice = createSliceWithThunk({
  name: "search",
  initialState,
  selectors: {
    searchState: (state: ISearchState) => state
  },
  reducers: (create) => ({
    fetchFilms: create.asyncThunk<IFilm[], string>(
      async (input: string, { rejectWithValue }) => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}` + `apikey=${import.meta.env.VITE_API_KEY}&s=${input}`
          );

          if (!response.ok) {
            return rejectWithValue(response.statusText);
          }
          const data = await response.json();

          if (data.Response === "True") {
            return data.Search;
          }
          return rejectWithValue(data.Error);
        } catch (e) {
          return rejectWithValue(e);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
          state.error = "";
          state.films = [];
        },
        fulfilled: (state, action) => {
          state.films = action.payload;
          state.error = "";
        },
        rejected: (state, action) => {
          state.isLoading = false;
          state.error = action.payload as string;
        },
        settled: (state) => {
          state.isLoading = false;
        }
      }
    ),

    errorState: create.reducer((state, action: PayloadAction<string>) => {
      state.error = action.payload;
    })
  })
});

export const { fetchFilms, errorState } = searchSlice.actions;
export const { searchState } = searchSlice.selectors;
export default searchSlice.reducer;
