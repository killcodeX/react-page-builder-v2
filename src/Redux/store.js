import { createStore } from "redux";
// import thunk from 'redux-thunk';
import rootReducer from './Reducers';


const store = createStore(rootReducer); //, composeWithDevTools(applyMiddleware(thunk))

export default store;