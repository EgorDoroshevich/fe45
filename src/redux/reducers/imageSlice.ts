import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Theme } from 'src/@types';
import { RootState } from '../store';


type initialState ={
    isSelectedImageModalOpened:boolean,
    selectedImage: string,
}
const initialState:initialState = {
    isSelectedImageModalOpened: false,
    selectedImage: '',
}
const imageSlice = createSlice({
name: 'imageReducer',
initialState,
reducers:{
    setSelectedImageModalOpened: (state, action: PayloadAction<boolean>) => {
     state.isSelectedImageModalOpened = action.payload; // тут данные ловятся и кладуться в нужное место
    },
    setSelectedImage: (state, action: PayloadAction<string>) => {
        state.selectedImage = action.payload;
    }
},
});

export const { setSelectedImageModalOpened, setSelectedImage } = imageSlice.actions;
export const ImageSelectors = {
        getSelectedImageModalOpened : (state:RootState) => state.imageReducer.isSelectedImageModalOpened,
        getSelectedImage: (state:RootState) => state.imageReducer.selectedImage,
}
export default imageSlice.reducer;