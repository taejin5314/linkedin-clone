import { combineReducers } from 'redux';

import userReducer from './userReducer';
import aritcleReducer from './articleReducer';

const rootReducer = combineReducers({
  userState: userReducer,
})

export default rootReducer;