import { asyncThunkCreator, buildCreateSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAboutFilm } from "../../models/models.ts";

export interface IAboutState {
  isLoading: boolean;
  error: string;
  film: IAboutFilm;
}

const initialState = {
  isLoading: false,
  error: "",
  film: {} as IAboutFilm
} as IAboutState;

const createSliceWithThunk = buildCreateSlice({
  creators: {
    asyncThunk: asyncThunkCreator
  }
});

export const aboutSlice = createSliceWithThunk({
  name: "about",
  initialState,
  selectors: {
    aboutState: (state: IAboutState) => state
  },
  reducers: (create) => ({
    fetchAboutFilm: create.asyncThunk<IAboutFilm, string>(
      async (id: string, { rejectWithValue }) => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}` + `apikey=${import.meta.env.VITE_API_KEY}&i=${id}`
          );

          if (!response.ok) {
            return rejectWithValue(response.statusText);
          }
          const data = await response.json();

          if (data.Response === "True") {
            return data;
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
          state.film = {} as IAboutFilm;
        },
        fulfilled: (state, action) => {
          state.film = action.payload;
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

export const { fetchAboutFilm, errorState } = aboutSlice.actions;
export const { aboutState } = aboutSlice.selectors;
export default aboutSlice.reducer;
