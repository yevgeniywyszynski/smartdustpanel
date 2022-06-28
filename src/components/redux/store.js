import { applyMiddleware, combineReducers, createStore, compose} from "redux"
import transactionHistoryRedux from '../redux/TransactionHistoryRedux';
import serwerListRedux from '../redux/SerwerListRedux';
import devicesListRedux from '../redux/DevicesListRedux';
import thunk from 'redux-thunk'

const initalState = {
    serwerList: [],
    devicesList: [],
    transactionHistory: []
}

const reducers = {
    transactionHistory: transactionHistoryRedux,
    serwerList: serwerListRedux,
    devicesList: devicesListRedux,
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initalState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;