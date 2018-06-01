import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseAction from '../../action/expense';

class ExpenseItem extends React.Component {
  render() {
    const { expense, expenseDestroy, expenseUpdate } = this.props;
    return (
      <div className="expense">
      <p>{expense.name} - ${expense.price}</p>
      <ExpenseForm expense={expense} onComplete={expenseUpdate}/>
      <button onClick={() => expenseDestroy(expense)}>Delete</button>
      </div>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
  expenseUpdate: PropTypes.func,
  expenseDestroy: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  expenseDestroy: data => dispatch(expenseAction.destroy(data)),
  expenseUpdate: data => dispatch(expenseAction.update(data)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);
