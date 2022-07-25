import { connect } from "react-redux";
import WithdrawMoney from './WithdrawMoney';
import { getBalance, getTypeCurrency, changeBalance, getName, getSurname, getAccountBankNumber } from "../redux/AccountBalanceRedux";

const mapStateToProps = (state) => ({
    balance: getBalance(state),
    typeCurrency: getTypeCurrency(state),
    name: getName(state),
    surname: getSurname(state),
    accountBankNumber: getAccountBankNumber(state)
})

const mapDisptachToProps = dispatch => ({
    changeBalance: (sum) => dispatch(changeBalance(sum))
})


export default connect(mapStateToProps,mapDisptachToProps)(WithdrawMoney);