import React from "react";
import styles from "./PostCard.module.css";
import { PostCardProps } from "./types";

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={post.image}
        alt={post.title}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>{post.title}</h3>

        <p className={styles.short}>
          {post.shortDescription}
        </p>

        <div className={styles.meta}>
          <span className={styles.category}>
            {post.category.name}
          </span>

          <span className={styles.date}>
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>

       

        <div className={styles.footer}>
          <span className={styles.likes}>
            ❤️ {post.likes}
          </span>
        </div>
      </div>
    </article>
  );
};
