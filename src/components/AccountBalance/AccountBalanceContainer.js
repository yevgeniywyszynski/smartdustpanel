import { connect } from "react-redux";
import AccountBalance from '../AccountBalance/AccountBalance';
import { getBalance, getEarningsWeek, getEarningsDay, getEarningsYear } from "../redux/AccountBalanceRedux";

const mapStateToProps = (state) => ({
    balance: getBalance(state),
    earningsDay: getEarningsDay(state),
    earningsWeek: getEarningsWeek(state),
    earningsYear: getEarningsYear(state)
})

export default connect(mapStateToProps,null)(AccountBalance);