import { connect } from "react-redux";
import AccountBalance from '../AccountBalance/AccountBalance';
import { getBalance, getEarningsWeek, getEarningsDay, getEarningsYear, changeEarning } from "../redux/AccountBalanceRedux";

const mapStateToProps = (state) => ({
    balance: getBalance(state),
    earningsDay: getEarningsDay(state),
    earningsWeek: getEarningsWeek(state),
    earningsYear: getEarningsYear(state)
})

const mapDisptachToProps = dispatch => ({
    changeEarning: (value) => dispatch(changeEarning(value)),
})

export default connect(mapStateToProps,mapDisptachToProps)(AccountBalance);