import {combineReducers} from 'redux';

import HTMLL from './html';
import CSS from './css';
import JS from './js';
import REACT from './reactjs';
import ALL from './allReducers';

const allReducers = combineReducers({
  course : ALL,
  HTMLL : HTMLL,
  CSS : CSS,
  JS : JS,
  REACT : REACT
});

export default allReducers;
