import { createStore, applyMiddleware } from 'redux';

// redux logging middleware
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// create a middlware variable that contains an array of your middleware being used
const middlewares = [logger];

// this spreads in all of the methods defined in the middlewares variable and applys the middleware to our redux store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
