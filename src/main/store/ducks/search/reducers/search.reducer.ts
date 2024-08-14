import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    searching: (_, { payload }: PayloadAction<string>) => payload,
    resetSearch: () => "",
  },
});

export const { searching, resetSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
