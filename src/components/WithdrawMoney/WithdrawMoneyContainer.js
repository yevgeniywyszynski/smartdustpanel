import { connect } from "react-redux";
import WithdrawMoney from './WithdrawMoney';
import { getBalance, getTypeCurrency } from "../redux/AccountBalanceRedux";

const mapStateToProps = (state) => ({
    balance: getBalance(state),
    typeCurrency: getTypeCurrency(state)
})

export default connect(mapStateToProps,null)(WithdrawMoney);