import React, { useState, useMemo } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Button, { ButtonTypes } from 'src/components/Button';
import { CearchIcon, CloseIcon, MenuIcon } from 'src/components/assets/icons';
import styles from './Header.module.scss';
import ThemeSwitcher from '../ThemeSwitcher';
import { Theme } from 'src/@types';
import { RoutesList } from 'src/pages/Router';
import Username from '../Username';
import { useThemeContext } from 'src/context/Theme';
import classNames from 'classnames';
import { PersonIcon } from '../assets/icons/PersonIcon';

const Header = () => {
    const {themeValue} = useThemeContext();
    const isLoggedIn = true;
    const [isOpened, setOpened] = useState(false);
    const navigate = useNavigate();
    const navLinks = useMemo(() => [
        {path:RoutesList.Home, title:'Home'},
        ...(isLoggedIn ? [{path:RoutesList.SignUp, title:'Add post'}] : [   ]),
        
    ], [isLoggedIn]);
    const handleMenuOpened = () =>{
        setOpened(!isOpened);
    }
    const onLoginButtonClick = () => {
    navigate(RoutesList.SignIn);
 }
    return (
    <div className = {classNames(styles.container, {[styles.darkContainer]: themeValue === Theme.Dark})}>

<div className ={styles.headerMain}>
<div className = {styles.header}>
        <Button 
        type ={ButtonTypes.Primary} 
        title ={isOpened ? <CloseIcon/> : <MenuIcon/>} 
        onClick ={handleMenuOpened}
        className = {styles.burgerMenuButton}
        />
    </div>
<div className={styles.headerMiddle}></div>
<div className = {styles.headerChearch}>
        <Button 
        type ={ButtonTypes.Primary} 
        title ={<CearchIcon/>} 
        onClick ={() => {}}
        className = {styles.burgerMenuButton}
        />
</div>
<div className = {styles.headerPerson}>
        <Button 
        type ={ButtonTypes.Primary} 
        title ={<PersonIcon/>} 
        onClick ={onLoginButtonClick}
        className = {styles.burgerMenuButton}
        />
</div>
</div>
<div className={styles.infoContainer}>
     <Outlet/>
     <div className ={styles.footer}>
 <div>©2022 Blogfolio</div>
 <div>All rights reserved</div>
         </div>
</div>
{isOpened &&<div className ={styles.menuContainer}>

<div> 
    {isLoggedIn && <Username username ={'Egor'}/>}
    {navLinks.map((link)=> ( 
        <NavLink
        to={link.path} 
        key = {link.path}
        className ={styles.navLinkButton}

        >{link.title}</NavLink>
    ))}
</div>
<div>
  <div><ThemeSwitcher/></div>  
   <Button 
   type={ButtonTypes.Secondary  }
   title={isLoggedIn ? "Log Out" : "Sign-In"}  
   onClick={onLoginButtonClick}
   className={styles.authButton}
   />
   </div>
</div>
    }
    </div>  
    );
};
export default Header;