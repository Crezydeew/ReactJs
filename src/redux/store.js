import {combineReducers,createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

const confingStore = (reducers = {}, preloaderState = {}, midllewares = []) => createStore(
combineReducers(
    ...reducers,

),
preloaderState,
compose(
    applyMiddleware(
        ...midllewares,
        thunk,
        reduxLogger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
)
);

export default confingStore
