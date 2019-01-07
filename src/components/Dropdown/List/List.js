import React from "react";
import styles from "./List.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const list = props => {
  const listItems = props.items.map((item, i) => (
    <li
      key={i}
      className={props.selection === i ? styles.selected : null}
      onClick={() => props.selectionHandler(i)}
    >
      {props.selection === i ? (
        <span className={styles.tick}>
          <FontAwesomeIcon icon="check" />
        </span>
      ) : null}
      {item}
    </li>
  ));

  return (
    <div className={styles.list}>
      <ul>{listItems}</ul>
    </div>
  );
};

export default list;
