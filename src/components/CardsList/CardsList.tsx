import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Post, PostsList } from "src/@types";
import { setSelectedPost, setSelectedPostModalOpened } from "src/redux/reducers/postSlice";
import PostCard, { PostCardSize } from "../PostCard";
import styles from "./CardsList.module.scss";


type CardsListProps = {
  cardsList: PostsList;
};

const CardsList: FC<CardsListProps> = ({ cardsList }) => {
const dispatch = useDispatch();
const onMoreClick = (post: Post) => () => {
dispatch(setSelectedPostModalOpened(true));
dispatch(setSelectedPost(post));
}


  return cardsList.length ? (
    <div className={styles.cardListcontainer}>
      <div>
        <PostCard 
        type={PostCardSize.Large} {...cardsList[0]} 
        onMoreClick = {onMoreClick(cardsList[0])} />
        <div className={styles.medium}>
          {cardsList.map((el, idx) => {
            if (idx >= 1 && idx <= 4) {
              return <PostCard 
              key={el.id} 
              type={PostCardSize.Medium} {...el} 
              onMoreClick = {onMoreClick(el)}/>;
            }
          })}
        </div>
      </div>
      <div className={styles.small}>
        {cardsList.map((el, idx) => {
          if (idx >= 5 && idx <= 10) {
            return <PostCard 
            key={el.id}
            type={PostCardSize.Small} {...el}
            onMoreClick = {onMoreClick(el)} />;
          }
        })}
      </div>
    </div>
  ) : null;
};

export default CardsList;