import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// combine reducers into a rootReducer
// const rootReducer = combineReducers({

// });

const store = createStore(
    // rootReducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger({ collapsed: true }),
    ),
);

export default store;
