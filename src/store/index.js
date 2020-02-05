import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import newsfeedReducer from '../reducers/newsfeedReducer';
import profileReducer from '../reducers/profileReducer';
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    newsfeed: {
        news: [],
        comment: {}
    },
    profile: {
        profile: {},
        experiences: ""
    }
}

const combinedReducers = combineReducers({
    newsfeed: newsfeedReducer,
    profile: profileReducer
})

export default function configureStore() {
    return createStore(combinedReducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}