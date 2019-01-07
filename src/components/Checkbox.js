import React, { Component } from "react";
import styles from "./Checkbox.module.scss";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
  }

  handleClick = event => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={this.state.checked}
        />
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export default Checkbox;
