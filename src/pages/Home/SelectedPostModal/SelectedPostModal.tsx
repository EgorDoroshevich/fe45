import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "src/components/Modal";
import { PostSelectors, setSelectedPost, setSelectedPostModalOpened } from "src/redux/reducers/postSlice";
import PostCard,  {PostCardSize} from "src/components/PostCard";
import { setSelectedImage, setSelectedImageModalOpened } from "src/redux/reducers/imageSlice";

const SelectedPostModal = () => {
    const isOpened = useSelector(PostSelectors.getSelectedPostModalOpened);
    const selectedPost = useSelector(PostSelectors.getSelectedPost);
    const dispatch = useDispatch();
    const onCloseModal = () => {
        dispatch(setSelectedPostModalOpened(false));
        dispatch(setSelectedPost(null));
    }
    

    return selectedPost ? ( <Modal 
    isOpen={isOpened} 
    onClose = {onCloseModal}>
        <PostCard type={PostCardSize.Large} {...selectedPost}/>
    </Modal>) : null;
}
export default SelectedPostModal;