import {combineReducers} from 'redux';

import HTMLL from './html';
import CSS from './css';
import JS from './js';
import REACT from './reactjs';

const allReducers = combineReducers({
  HTMLL : HTMLL,
  CSS : CSS,
  JS : JS,
  REACT : REACT
});

export default allReducers;
