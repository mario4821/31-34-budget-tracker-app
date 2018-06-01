import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const defaultState = {
  name: '',
  budget: '',
};

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form onSubmit={this.handleSubmit} className="category-form">
      <input
      type="text"
      name="name"
      placeholder="name"
      value={this.state.name}
      onChange={this.handleChange}
      />
      <input
      type="number"
      name="budget"
      placeholder="budget"
      value={this.state.budget}
      onChange={this.handleChange}
      />
      <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  category: PropTypes.object,
  onComplete: PropTypes.func,
};
