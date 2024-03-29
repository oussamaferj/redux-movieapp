import { createStore, compose } from "redux";
import reducer from "../reducers/reducers";
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
const store = createStore(reducer,enhancers)
export default store;