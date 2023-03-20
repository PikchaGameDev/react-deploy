import React, { useEffect, useState } from "react";
import styles from "./dropdown.css";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isOpenDrop, setIsOpenDrop] = useState(isOpen);
  useEffect(() => setIsOpenDrop(isOpen), [isOpen]);
  useEffect(() => (isOpenDrop ? onOpen() : onClose()), [isOpenDrop]);

  const handleDropdownState = () => {
    if (isOpen === undefined) {
      setIsOpenDrop(!isOpenDrop);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropBtn} onClick={handleDropdownState}>
        {button}
      </div>
      {isOpenDrop && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsOpenDrop(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
