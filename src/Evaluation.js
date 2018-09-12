import React, { Component } from 'react';

class Evaluation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.evaluation.input}</div>
        <div className="text-primary">&emsp;&emsp;{this.props.evaluation.output}</div>
      </div>
    )
  }
}

export default Evaluation;