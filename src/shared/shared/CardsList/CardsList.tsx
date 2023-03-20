import React, { useContext } from "react";
import { postContext } from "../../../context/postContext";
import { Card } from "./Card/Card";
import styles from "./cardsList.css";
import { GenericList } from "../GenericList";
import { showAction } from "./Card/Menu";

export function CardsList() {
  const data = useContext(postContext);

  const cards = data.map(
    ({
      id,
      previewImg,
      title,
      avatar,
      author,
      rating,
      commentsCount,
      datePostUtc,
    }) => (
      <Card
        key={id}
        image={previewImg}
        title={title}
        avatar={avatar}
        userName={author}
        rating={rating}
        comments={commentsCount}
        createDate={datePostUtc}
      />
    )
  );

  return (
    <ul className={styles.cardsList}>
      {data.length ? (
        <GenericList
          list={cards.map((card, index) => ({
            element: card,
            onClick: showAction,
            id: String(index),
            className: styles.menuItem,
            As: "li",
          }))}
        ></GenericList>
      ) : (
        <div>😵‍💫 Хмм... здесь пока пусто</div>
      )}
    </ul>
  );
}
