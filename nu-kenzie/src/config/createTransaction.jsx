import React from "react";

export class ButtonLogin extends React.Component {
  state = {
    text: "eu atirei o pau no gato",
  };

  random = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.text}</h1>
        <input type="text" onChange={this.random} />
      </React.Fragment>
    );
  }
}
