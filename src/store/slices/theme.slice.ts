import {createSlice} from '@reduxjs/toolkit';

type ThemeInitialState = {
  mode: 'light' | 'dark';
};

const InitialState: ThemeInitialState = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: InitialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
