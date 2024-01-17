import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from 'redux-thunk';
import rootReducer from './Reducers';


const store = createStore(rootReducer, composeWithDevTools()); //, composeWithDevTools(applyMiddleware(thunk))

export default store;