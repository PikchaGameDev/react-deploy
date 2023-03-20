import React, { useContext } from "react";
import { userContext } from "../../../../context/userContext";
import { UserBlock } from "./UserBlock";
import styles from "./searchBlock.css";

export function SearchBlock() {
  const { name, iconImg } = useContext(userContext);
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
}
