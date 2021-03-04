import { createStore } from 'redux';
import tokenreducer from '../reducer/reducer'

export default createStore(
    tokenreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );