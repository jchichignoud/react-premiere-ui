import React from "react";
import styles from "./Button.module.scss";

const button = props => {
  return (
    <button
      disabled={props.disabled}
      className={props.highlight ? styles.highlight : undefined}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
