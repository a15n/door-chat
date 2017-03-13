import React, { Component } from 'react';
import './style.css';
// TODO style the input

class TextField extends Component {
  constructor() {
    super();

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  componentDidMount() {
    this.input.focus();
  }
  componentDidUpdate() {
    this.input.focus();
    this.input.value = '';
  }
  handleKeyUp(target) {
    const { value } = this.input;

    // call onChange if provided
    if (this.props.onChange) {
      this.props.onChange(value);  
    }
    
    // call onSubmit if key is 'enter' && value.length
    // clear the input's value
    if (target.keyCode === 13 && value.length) {
      this.props.onSubmit(value);
      this.input.value = '';
    }
  }
  render() {
    const { value, placeholder } = this.props;

    return (
      <input 
        className="TextField"
        ref={input => this.input = input} 
        onKeyUp={this.handleKeyUp}
        type="text"
        defaultValue={value}
        placeholder={placeholder}
      />
    )
  }
}

/*
TODO add documentation
TODO change these to onKeyUp and onEnter
*/

TextField.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
}

export default TextField;
