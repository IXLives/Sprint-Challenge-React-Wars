import React from "react";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: ""
    };
  }

  render() {
    return <button>{this.props.function}</button>;
  }
}

export default Buttons;
