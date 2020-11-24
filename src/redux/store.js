import { createStore } from 'redux';
import AllReducers from './AllReducers';
import { composeWithDevTools } from 'redux-devtools-extension';


//Crete Redux Store for State Management
const store = createStore(AllReducers,composeWithDevTools());

export default store;