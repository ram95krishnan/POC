import {combineReducers} from 'redux';

import status from './status';

import ALL from './allReducers';

const allReducers = combineReducers({
  course : ALL
});

export default allReducers;
