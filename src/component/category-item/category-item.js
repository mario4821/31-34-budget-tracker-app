import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryAction from '../../action/category';

class CategoryItem extends React.Component {
  render() {
    const {
      category, key, categoryDestroy, categoryUpdate,
    } = this.props;
    return (
      <div className="category" key={key}>
      <h1>{category.name} - ${category.budget}</h1>
      <div className="category-display">
      <CategoryForm category={category} onComplete={categoryUpdate}/>
      <button className="delete" onClick={() => categoryDestroy(category)}>Delete</button>
      </div>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryDestroy: data => dispatch(categoryAction.destroy(data)),
    categoryUpdate: data => dispatch(categoryAction.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);
