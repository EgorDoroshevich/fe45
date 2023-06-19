import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Theme } from 'src/@types';
import { RootState } from '../store';
type initialState ={
    themeValue:Theme,
}
const initialState:initialState = {
    themeValue: Theme.Light,
}
const themeSlice = createSlice({
name: 'themeReducer',
initialState,
reducers:{
    setThemeValue: (state, action: PayloadAction<Theme>) => {
     state.themeValue = action.payload; // тут данные ловятся и кладуться в нужное место
    },
},
});

export const { setThemeValue } = themeSlice.actions
export const ThemeSelectors = {
        getThemeValue: (state:RootState) => state.themeReducer.themeValue,
}
export default themeSlice.reducer;