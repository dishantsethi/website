
import React, { Component } from "react";
import Switch from "react-switch";

class Theme extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }
 
  render() {
    return (
      <label>
        <Switch onChange={this.handleChange} checked={this.state.checked} 
            offColor="#baaa80"
            onColor="#353535"
            width={90}
            height={40}
            uncheckedIcon={
                <span
                className="iconify"
                data-icon="twemoji:owl"
                data-inline="false"
                style={{
                    display: "block",
                    height: "80%",
                    marginTop: "3px",
                    fontSize: 20,
                    textAlign: "end",
                    marginLeft: "8px",
                    color: "#353239",
                    backgroundColor: "unset"
                }}
                ></span>
            }
            checkedIcon={
                <span
                className="iconify"
                data-icon="noto-v1:sun-with-face"
                data-inline="false"
                style={{
                    display: "block",
                    height: "92%",
                    marginLeft: '-3px',
                    fontSize: 25,
                    textAlign: "end",
                    color: "#353239",
                    backgroundColor: 'unset'
                }}
                ></span>
            }
            />
      </label>
    );
  }
}

export default Theme;