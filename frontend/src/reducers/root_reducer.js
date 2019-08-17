import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import journals from './journal_reducer';

const RootReducer = combineReducers({
  session,
  journals,
  errors
});

export default RootReducer;
