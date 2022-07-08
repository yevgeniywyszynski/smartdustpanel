import { connect } from "react-redux";
import AccountBalance from '../AccountBalance/AccountBalance';
import { getBalance,
        getDay,
        getWeek,
        getYear,
        getMonth,
        changeEarning,
        getTypeCurrency,
        getEarningType} from "../redux/AccountBalanceRedux";

const mapStateToProps = (state) => ({
    balance: getBalance(state),
    day: getDay(state),
    week: getWeek(state),
    month: getMonth(state),
    year: getYear(state),
    earningType: getEarningType(state),
    typeCurrency: getTypeCurrency(state)
})

const mapDisptachToProps = dispatch => ({
    changeEarning: (value) => dispatch(changeEarning(value)),
})

export default connect(mapStateToProps,mapDisptachToProps)(AccountBalance);