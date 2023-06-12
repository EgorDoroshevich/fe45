import React, {useState} from "react";

import SelectedPost from "./pages/SelectedPost";
import CardsList from "./components/CardsList/CardsList";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp";
import {ThemeProvider} from "./context/Theme";
import {Theme} from './@types';
import ThemeSwitcher from "./components/ThemeSwitcher";
import  Router  from "src/pages/Router";

const App = () => {
  const [themeValue, setThemeValue] = useState<Theme>(Theme.Light);

  const onChangeTheme = (value: Theme) => () => {
  setThemeValue(value);
}

  return (

    <ThemeProvider themeValue = {themeValue} onChangeTheme = {onChangeTheme}> 
   <Router/>
    </ThemeProvider>

  );
};

export default App;