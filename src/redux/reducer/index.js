import {combineReducers} from 'redux';
import theme from './theme';
import profile from './profile';
import cart from './cart';

const rootReducer = combineReducers({
  theme,
  profile,
  cart,
});

export default rootReducer;
