import {combineReducers} from 'redux';
import theme from './theme';
import profile from './profile';
import cart from './cart';
import user from './user';

const rootReducer = combineReducers({
  theme,
  profile,
  cart,
  user,
});

export default rootReducer;
