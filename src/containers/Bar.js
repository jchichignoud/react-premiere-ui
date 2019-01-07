import React from "react";
import styles from "./Bar.module.scss";

const bar = props => {
  return <div className={styles.bar}>{props.children}</div>;
};

export default bar;
