import { createStore,applyMiddleware,compose } from 'redux';
import logger from 'redux-logger'
import tokenreducer from '../reducer/reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    tokenreducer,
    applyMiddleware(logger),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );