import React, {useState} from "react";

import SelectedPost from "./pages/SelectedPost";
import CardsList from "./components/CardsList/CardsList";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp";
import {ThemeProvider} from "./context/Theme";
import {Theme} from './@types';
import ThemeSwitcher from "./components/ThemeSwitcher";
import  Router  from "src/pages/Router";
import { useDispatch, useSelector } from "react-redux";
import { setThemeValue, ThemeSelectors } from "./redux/reducers/themeSlice";
import { RootState } from "./redux/store";

const App = () => {
//  const [themeValue, setThemeValue] = useState<Theme>(Theme.Light);
  const dispatch = useDispatch();
  //то, что данные из редакса достает
  const themeValue = useSelector(ThemeSelectors.getThemeValue);
  const onChangeTheme = (value: Theme) => () => {
  
  dispatch(setThemeValue(value)); // то что швыряет в редакс данные


    //setThemeValue(value);
}

  return (

    <ThemeProvider themeValue = {themeValue} onChangeTheme = {onChangeTheme}> 
   <Router/>
    </ThemeProvider>

  );
};

export default App;