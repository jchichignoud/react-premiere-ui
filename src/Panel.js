import React, { Component } from "react";
import "./global.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import Box from "./containers/Box";
import Bar from "./containers/Bar";
import Dropdown from "./components/Dropdown/Dropdown";
import Checkbox from "./components/Checkbox";

class Panel extends Component {
  render() {
    library.add(faSearch, faTimes, faCheck, faChevronDown);
    return [
      <Box title="Buttons">
        <Button>Export</Button>
        <Button highlight>Save</Button>
        <Button disabled>Queue</Button>
      </Box>,
      <Box title="Search Box">
        <TextInput />
      </Box>,
      <Box title="Selection">
        <Bar>
          <Dropdown
            options={[
              "Match Source - High Bitrate",
              "Youtube HD 1080p25",
              "Apple ProRes 422HQ"
            ]}
          />
          <Button>Export</Button>
        </Bar>
      </Box>,
      <Box title="Checkboxes">
        <Checkbox label="This is a checkbox" />
        <Checkbox label="And another one" />
        <Checkbox label="Plus a third" />
      </Box>
    ];
  }
}

export default Panel;
