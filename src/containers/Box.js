import React from "react";
import styles from "./Box.module.scss";

const box = props => {
  if (props.title) {
    return (
      <div className={styles.box}>
        <div className={styles.boxTitle}>{props.title}</div>
        {props.children}
      </div>
    );
  } else {
    return <div className={styles.box}>{props.children}</div>;
  }
};

export default box;
