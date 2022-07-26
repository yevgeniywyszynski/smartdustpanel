import { connect } from "react-redux";
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { getTransactionHistory} from "../redux/TransactionHistoryRedux";
import {getTypeCurrency } from '../redux/TransactionOptionsRedux';
import { updateBalance, getBalance } from "../redux/AccountBalanceRedux";

const mapStateToProps = (state) => ({
    allTransaction: getTransactionHistory(state),
    typeCurrency: getTypeCurrency(state),
    balance: getBalance(state),
})

const mapDisptachToProps = dispatch => ({
    updateBalance: (value) => dispatch(updateBalance(value)),
})

export default connect(mapStateToProps,mapDisptachToProps)(TransactionHistory);