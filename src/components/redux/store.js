import { applyMiddleware, combineReducers, createStore, compose} from "redux"
import transactionHistoryRedux from '../redux/TransactionHistoryRedux';
import serwerListRedux from '../redux/SerwerListRedux';
import devicesListRedux from '../redux/DevicesListRedux';
import accountBalanceRedux from '../redux/AccountBalanceRedux';
import contractsRedux from '../redux/ContractsRedux';
import transactionOptionsRedux from '../redux/TransactionOptionsRedux';
import listUIStateRedux from '../redux/ListUIStateRedux';
import isSubmittedRedux from '../redux/isSubmittedRedux';
import thunk from 'redux-thunk'
import db from '../../db/db2.json'

const initalState = {
    accountBalance: {
        balance: db.accountBalance.balance,
        day: db.accountBalance.day,
        week: db.accountBalance.week,
        year: db.accountBalance.year,
        month: db.accountBalance.month,
        earningType: db.accountBalance.earningType,
    },  // {...statePart, week: 20}

    listUIState: {
        isOpen: false,
        serwerListOpen: [],
        devicesListOpen: {

        }
    },

    isSubmitted: false,
    serwerList: db.serwerList,
    devicesList: db.devicesList,
    transactionHistory: db.transactionHistory,
    contracts: db.contracts,
    transactionOptions: db.transactionOptions
}

const reducers = {
    transactionHistory: transactionHistoryRedux,
    serwerList: serwerListRedux,
    devicesList: devicesListRedux,
    accountBalance: accountBalanceRedux,
    contracts: contractsRedux,
    transactionOptions: transactionOptionsRedux,
    listUIState: listUIStateRedux,
    isSubmitted: isSubmittedRedux
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initalState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;