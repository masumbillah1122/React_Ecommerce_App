
import rootReducers from "./reducer/index";
import { createStore } from 'redux';

const store = createStore(rootReducers);

export default store;
