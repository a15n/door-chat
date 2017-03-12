import React, { Component } from 'react';
// import './style.css';

class TextField extends Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.input.value);
  }
  onChange(e) {
    e.preventDefault();
    this.props.onChange(this.input.value);
  }
  render() {
    const { value, placeholder } = this.props;
    return (
      <form className="TextField" onSubmit={e => this.onSubmit(e)}>
        <input 
          ref={input => this.input = input} 
          onChange={e => this.onChange(e)}
          type="text"
          defaultValue={value}
          placeholder={placeholder}
        />
      </form>
    )
  }
}

/*
TODO add documentation
*/

TextField.propTypes = {
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
}

export default TextField;
