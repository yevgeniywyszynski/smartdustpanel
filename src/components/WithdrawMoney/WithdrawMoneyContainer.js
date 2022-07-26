import { connect } from "react-redux";
import WithdrawMoney from './WithdrawMoney';
import { getBalance, getTypeCurrency, changeBalance, getName, getSurname, getAccountBankNumber } from "../redux/AccountBalanceRedux";
import { addTransaction } from "../redux/TransactionHistoryRedux";

const mapStateToProps = (state) => ({
    balance: getBalance(state),
    typeCurrency: getTypeCurrency(state),
    name: getName(state),
    surname: getSurname(state),
    accountBankNumber: getAccountBankNumber(state)
})

const mapDisptachToProps = dispatch => ({
    changeBalance: (sum) => dispatch(changeBalance(sum)),
    addTransaction: (transObj) => dispatch(addTransaction(transObj))
})


export default connect(mapStateToProps,mapDisptachToProps)(WithdrawMoney);