import { connect } from "react-redux";
import WithdrawMoney from './WithdrawMoney';
import { getBalance, getTypeCurrency, changeBalance } from "../redux/AccountBalanceRedux";

const mapStateToProps = (state) => ({
    balance: getBalance(state),
    typeCurrency: getTypeCurrency(state)
})

const mapDisptachToProps = dispatch => ({
    changeBalance: (sum) => dispatch(changeBalance(sum))
})


export default connect(mapStateToProps,mapDisptachToProps)(WithdrawMoney);