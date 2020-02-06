import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import newsfeedReducer from '../reducers/newsfeedReducer';
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    newsfeed: {
        news: [],
        comment: {}
    }
}

const combinedReducers = combineReducers({
    newsfeed: newsfeedReducer
})

export default function configureStore() {
    return createStore(combinedReducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}