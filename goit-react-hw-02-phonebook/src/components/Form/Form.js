import { Component } from 'react';
import shortid from 'shortid';

const INITIAL_STATE = {
  name: '',
  id: '',
  number: '',
};

class Form extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  oninputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, id: shortid.generate() });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.oninputHandler}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.oninputHandler}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
