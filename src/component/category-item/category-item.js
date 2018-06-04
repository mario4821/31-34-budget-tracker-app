import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryAction from '../../action/category';
import * as expenseAction from '../../action/expense';
import ExpenseForm from '../expense-form/expense-form';
import ExpenseItem from '../expense-item/expense-item';

class CategoryItem extends React.Component {
  render() {
    const {
      category, key, categoryDestroy, categoryUpdate, expenses, expenseCreate,
    } = this.props;

    const categoryExpenses = expenses[category.id];

    return (
      <div className="category" key={key}>
      <h1>{category.name} - ${category.budget}</h1>
      <div className="category-display">
      <CategoryForm category={category} onComplete={categoryUpdate}/>
      <button className="delete" onClick={() => categoryDestroy(category)}>Delete</button>
      </div>
      <ExpenseForm category={category} onComplete={expenseCreate}/>
      <div className="expense-list">
      {
        categoryExpenses.map(expense => <ExpenseItem expense={expense} key={expense.id}/>)
      }
      </div>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  expenses: PropTypes.object,
  expenseCreate: PropTypes.func,
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: data => dispatch(expenseAction.create(data)),
    categoryDestroy: data => dispatch(categoryAction.destroy(data)),
    categoryUpdate: data => dispatch(categoryAction.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
