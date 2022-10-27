import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode:false,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,   
    reducers: {
        disableDarkMode: (state) => {
            state.darkMode = false;
        },
        enableDarkMode: (state) => {
            state.darkMode = true;
        },
    }
});

export const {disableDarkMode,enableDarkMode} = uiSlice.actions;

export default uiSlice.reducer;
