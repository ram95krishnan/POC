import {combineReducers} from 'redux';

import HTML from './html';
import REACT from './reactt';
import JS from './js.js';
import CSS from './css.js';
import ALL from './allreducers';

const allReducers = combineReducers({
  course : ALL,
  HTML : HTML,
  CSS : CSS,
  JS : JS,
  REACT : REACT
});

export default allReducers;
