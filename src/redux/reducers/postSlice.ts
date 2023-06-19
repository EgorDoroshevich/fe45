import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Theme } from 'src/@types';
import { RootState } from '../store';
import {Post} from 'src/@types';



type initialState ={
    isSelectedPostModalOpened:boolean,
    selectedPost: Post | null,
}
const initialState:initialState = {
    isSelectedPostModalOpened: false,
    selectedPost: null,
}
const postSlice = createSlice({
name: 'postReducer',
initialState,
reducers:{
    setSelectedPostModalOpened: (state, action: PayloadAction<boolean>) => {
     state.isSelectedPostModalOpened = action.payload; // тут данные ловятся и кладуться в нужное место
    },
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
        state.selectedPost = action.payload;
    }
},
});

export const { setSelectedPostModalOpened, setSelectedPost } = postSlice.actions;
export const PostSelectors = {
        getSelectedPostModalOpened : (state:RootState) => state.postReducer.isSelectedPostModalOpened,
        getSelectedPost: (state:RootState) => state.postReducer.selectedPost,
}
export default postSlice.reducer;