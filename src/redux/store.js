/* Redux and Reducers */
import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers";

/* middlewares */
import { createEpicMiddleware } from "redux-observable";
import logger from 'redux-logger'

/* middleWare - rootEpic */

import rootEpic from "redux/epics";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, logger)
  );
  epicMiddleware.run(rootEpic);
  return store;
}