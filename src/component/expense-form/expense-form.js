import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const defaultState = { name: '', price: '' };

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || defaultState;
    autoBind.call(this, ExpenseForm);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });

    this.setState(defaultState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
      <input
      type="text"
      name="name"
      placeholder="expense"
      value={this.state.name}
      onChange={this.handleChange}
      />
      <input
      type="number"
      name="price"
      placeholder="$"
      value={this.state.price}
      onChange={this.handleChange}
      />
      <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  expense: PropTypes.object,
  onComplete: PropTypes.func,
  category: PropTypes.object,
};
