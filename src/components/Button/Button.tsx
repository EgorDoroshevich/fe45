import React, {FC, ReactElement} from "react";
import styles from "./Button.module.scss";


export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
  Error = "error",
}

type ButtonProps = {
  type: ButtonTypes;
  title: string | ReactElement;
  onClick: () => void;


}



const Button: FC<ButtonProps> = ({type, title, onClick}) => {
    const buttonStyles = styles[type]
    return <div onClick = {onClick} className = {buttonStyles}> {title}</div>
}

export default Button;