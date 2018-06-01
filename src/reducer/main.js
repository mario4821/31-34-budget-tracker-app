import { combineReducers } from 'redux';
import categories from './category';
import expense from './expense';

export default combineReducers({
  categories, expense,
});
