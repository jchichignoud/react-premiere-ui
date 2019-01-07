import React, { Component } from "react";
import styles from "./Dropdown.module.scss";
import List from "./List/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: null,
      isOpen: false
    };
  }

  toggleList = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleSelection = id => {
    this.setState({ selection: id, isOpen: false });
  };

  render() {
    return (
      <div className={styles.container}>
        <div
          className={[
            styles.header,
            this.state.isOpen ? styles.open : undefined
          ].join(" ")}
          onClick={this.toggleList}
        >
          <div className={styles.headerTitle}>
            {this.props.options[this.state.selection] || "Select an option"}
          </div>
          <FontAwesomeIcon icon="chevron-down" />
        </div>
        {this.state.isOpen ? (
          <List
            items={this.props.options}
            selection={this.state.selection}
            selectionHandler={this.handleSelection}
          />
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
