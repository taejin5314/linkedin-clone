import { combineReducers } from 'redux';

import userReducer from './userReducer';
import aritcleReducer from './articleReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: aritcleReducer,
})

export default rootReducer;