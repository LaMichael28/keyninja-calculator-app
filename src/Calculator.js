import React, { Component } from 'react';
import * as math from 'mathjs';
import Evaluation from './Evaluation';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      input: "",
      parser: math.parser()
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.input && this.state.input.length>0) {
      let output = "Error. Please try other inputs.";
      try {
        output = this.state.parser.eval(this.state.input);
      } catch (e) {
      }
      this.setState({
        input: "",
        history: this.state.history.concat({
          input: this.state.input,
          output: output
        })
      });
    }
  }

  handleClick(event) {
    this.state.parser.clear();
    this.setState({
      history: []
    });
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.history.map(
              evaluation => <Evaluation key={evaluation.input} evaluation={evaluation}/>
            )
          }
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-4">
              <input name="input" className="form-control" placeholder="Type your math evaluation here..." 
                type="text" value={this.state.input} onChange={this.handleInputChange} />
            </div>
            <div className="col-1.5">
              <input type="submit" className="btn btn-primary" value="Evaluate" />
            </div>
            <div className="col-1.5">
              <button type="button" className="btn btn-danger" onClick={this.handleClick}>Clear</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Calculator;
