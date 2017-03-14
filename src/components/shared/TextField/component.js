import React, { Component } from 'react';
import './style.css';

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

    // call onKeyUp if provided
    if (this.props.onKeyUp) {
      this.props.onKeyUp(value);  
    }
    
    // call onEnter if key is 'enter' && value.length
    // clear the input's value
    if (target.keyCode === 13 && value.length) {
      this.props.onEnter(value);
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

TextField.propTypes = {
  onEnter: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  onKeyUp: React.PropTypes.func,
}

export default TextField;
