import React from "react";
import { Dropdown } from "../../../Dropdown";
import { EIcons, Icon } from "../../../Icon";
import styles from "./menu.css";
import { GenericList } from "../../../GenericList";

export function showAction(id: string) {
  console.log(`Нажали на ${id}`);
}

const dropdownOptions = [
  <>
    <Icon width={15} height={15} name={EIcons.comments} />
    <span>Комментарии</span>
  </>,
  <>
    <Icon width={15} height={15} name={EIcons.share} />
    <span>Поделиться</span>
  </>,
  <>
    <Icon width={15} height={15} name={EIcons.expand} />
    <span>Скрыть</span>
  </>,
  <>
    <Icon width={15} height={15} name={EIcons.save} />
    <span>Сохранить</span>
  </>,
  <>
    <Icon width={15} height={15} name={EIcons.warning} />
    <span>Пожаловаться</span>
  </>,
];

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={<Icon name={EIcons.menu} width={31} height={31} />}>
        <div className={styles.dropdown}>
          {
            <GenericList
              list={dropdownOptions.map((option, index) => ({
                element: option,
                onClick: showAction,
                id: String(index),
                className: styles.menuItem,
                As: "li",
              }))}
            />
          }
        </div>
      </Dropdown>
    </div>
  );
}
