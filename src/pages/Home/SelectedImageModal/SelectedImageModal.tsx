import React from "react";
import Modal from "src/components/Modal";
import { ImageSelectors, setSelectedImage, setSelectedImageModalOpened } from "src/redux/reducers/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import ImageModal from "src/components/ImageModal";
import style from "./SelectedImageModal.module.scss";

const SelectedImageModal = () => {
    const isOpened = useSelector(ImageSelectors.getSelectedImageModalOpened);
    const selectedImage = useSelector(ImageSelectors.getSelectedImage);
    const dispatch = useDispatch();
    const onCloseImage = () => {
        dispatch(setSelectedImageModalOpened(false));
        dispatch(setSelectedImage(""));
    }
   
    return selectedImage ? (
        <ImageModal
         isOpen = {isOpened}
         onClose = {onCloseImage}
         >
          <img src={selectedImage} />
        </ImageModal>
    ) : null;

}
export default SelectedImageModal;
