import React from "react";
import styles from "./postTitle.css";

interface IPostTitleProps {
  title: string | undefined;
}

export function PostTitle({ title }: IPostTitleProps) {
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        {title}
      </a>
    </h2>
  );
}
