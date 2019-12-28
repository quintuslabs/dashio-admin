import React, { Component } from "react";
import "./StyleSheets/SelectWithImage.css";
import IndiaFlag from "../../Utils/Countries-States-Cities/flags/flag-of-India.jpg";

class SelectWithImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
      open: false
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", e =>
      this.handleClickOutside(e, this.selectWrapper)
    );
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleClickOutside = (event, wrapperRef) => {
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      this.setState({ open: false });
    }
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      if (this.state.open) {
        //select option
      } else {
        this.setState({ open: true });
      }
    } else if (event.keyCode === 27) {
      this.setState({ open: false }, this.selectedOption.focus());
    }
  };

  onSelectOption = option => {
    this.setState(
      { selected: option, open: false },
      this.selectedOption.focus()
    );
  };

  render() {
    const options = this.props.options.map(option => (
      <option value={option.value}>{option.text}</option>
    ));

    const placeholderOptions = this.props.options.map(option => (
      <div
        className="option"
        title={option.text}
        value={option.value}
        onClick={() => this.onSelectOption(option)}
        tabIndex={0}
      >
        <span className="option-dot" style={option.style} />
        {option.text}
      </div>
    ));

    return (
      <div
        ref={wrapper => {
          this.selectWrapper = wrapper;
        }}
      >
        <div className={this.state.open ? "dropdown open" : "dropdown"}>
          <div
            className="dropdown__selected"
            title={this.state.selected.text}
            onClick={() => this.setState({ open: !this.state.open })}
            tabIndex={0}
            aria-controls="dropdown-options"
            ref={selected => {
              this.selectedOption = selected;
            }}
          >
            <span className="selected-option">{this.state.selected.text}</span>
            <span className="option-dot">
              <img src={IndiaFlag}></img>
            </span>
            <span className="fa fa-caret-down"></span>
          </div>
          <div className="dropdown__options" id="dropdown-options">
            {placeholderOptions}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectWithImage;
