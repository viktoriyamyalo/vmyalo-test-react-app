import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import { reducer as formReducer } from 'redux-form';
import styleReducer from './style_reducer';
import paragraphsReducer from './pargraphs_reducer';

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
  style: styleReducer,
  paragraphs: paragraphsReducer
});

export default rootReducer;
