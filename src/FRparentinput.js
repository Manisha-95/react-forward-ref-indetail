import React, { Component } from 'react';
import FRinput from './FRinput';

class FRparentinput extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state ={
      inputValue:'',
    }
  }
  change = () => {
    this.inputRef.current.focus();
    this.setState({inputValue: this.inputRef.current.value})
  };
  
  render() {
    console.log(this.state.inputValue);
    return (
      <div>
        <FRinput ref={this.inputRef} />
        <button onClick={this.change}>Focus input</button>
      </div>
    );
  }
}
export default FRparentinput;
