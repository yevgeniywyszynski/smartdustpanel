import { applyMiddleware, combineReducers, createStore, compose} from "redux"
import transactionHistoryRedux from '../redux/TransactionHistoryRedux';
import serwerListRedux from '../redux/SerwerListRedux';
import devicesListRedux from '../redux/DevicesListRedux';
import accountBalanceRedux from '../redux/AccountBalanceRedux';
import thunk from 'redux-thunk'
import db from '../../db/db2.json'

const initalState = {
    accountBalance: {
        balance: db.accountBalance.balance,
        earningsWeek: db.accountBalance.earningsWeek,
        earningsDay: db.accountBalance.earningsDay,
        earningsYear: db.accountBalance.earningsYear,
        earningType: db.accountBalance.earningType
    },
    serwerList: db.serwerList,
    devicesList: db.devicesList,
    transactionHistory: db.transactionHistory
}

const reducers = {
    transactionHistory: transactionHistoryRedux,
    serwerList: serwerListRedux,
    devicesList: devicesListRedux,
    accountBalance: accountBalanceRedux,
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initalState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;