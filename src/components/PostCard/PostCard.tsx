import React, { FC } from "react";
import styles from "./PostCard.module.scss";
import { BookmarkIcon, DislikeIcon, LikeIcon, MoreMenuIcon } from "../assets/icons";
import classNames from "classnames";

export enum PostCardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

  type PostCardProps = {
  id: number;
  image: string;
  text?: string;
  date: string;
  lesson_num: number;
  title: string;
  type:PostCardSize;
  onMoreClick?: () => void;
};

const PostCard: FC<PostCardProps> = ({image, title, text, date, type, onMoreClick}) => {
  const postCardStyle = styles[type];
  return (
    <div className={classNames(postCardStyle)}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <span className={styles.date}>{date}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.cardImg}>
          <img src={image} alt="imagePost" />
        </div>
      </div>
      <div className={styles.iconsWrapper}>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <LikeIcon />
          </div>
          <div className={styles.icon}>
            <DislikeIcon />
          </div>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <BookmarkIcon />
          </div>
         { onMoreClick && (<div className={styles.icon} onClick = {onMoreClick}>
            <MoreMenuIcon />
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default PostCard;