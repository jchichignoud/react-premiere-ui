import React, { Component } from "react";
import styles from "./TextInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", focused: false };
    this.textInput = React.createRef();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  focusTextInput = () => {
    this.textInput.current.focus();
  };

  onBlur = () => {
    this.setState({ focused: false });
  };
  onFocus = () => {
    this.setState({ focused: true });
  };

  clearInput = e => {
    e.stopPropagation();
    this.setState({ value: "", focused: false });
  };

  render() {
    return (
      <div
        className={[
          styles.container,
          this.state.focused ? styles.activated : undefined
        ].join(" ")}
        onClick={this.focusTextInput}
      >
        <FontAwesomeIcon
          icon="search"
          flip="horizontal"
          className={
            this.state.value || this.state.focus ? styles.blue : undefined
          }
        />
        <input
          ref={this.textInput}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        {this.state.value ? (
          <FontAwesomeIcon icon="times" onClick={this.clearInput} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TextInput;
