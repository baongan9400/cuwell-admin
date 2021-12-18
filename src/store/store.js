import { applyMiddleware, createStore } from "redux";
import rootReducer from "redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "sagas/index";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
);

sagaMiddleware.run(rootSaga);
export default store;
