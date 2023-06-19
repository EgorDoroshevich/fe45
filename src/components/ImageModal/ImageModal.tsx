import React, {FC} from "react";
import ReactModal from 'react-modal';
import {Children} from "src/@types";
import style from './Modal.module.scss';
import classNames from "classnames";
import { CloseIcon } from "../assets/icons";

type ImageModalProps = {
isOpen:boolean;
onClose: () => void;
children: Children;
};

const ImageModal: FC<ImageModalProps> = ({isOpen, onClose, children}) => {
    return <ReactModal 
    className = {style.ImageModal}
    isOpen = {isOpen}
    onRequestClose={onClose}
    >

        <div 
        onClick={onClose}
        className={style.ImageClose}>
            <CloseIcon fill='black' />
        </div>
        {children}</ReactModal>
}
export default ImageModal;