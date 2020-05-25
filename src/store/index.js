import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/root';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (noop) => noop
  )
);

export default store;
