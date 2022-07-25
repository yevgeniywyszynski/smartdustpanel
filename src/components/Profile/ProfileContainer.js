import { connect } from "react-redux";
import Profile from '../Profile/Profile';
import { getName, getSurname, getAccountBankNumber } from "../redux/AccountBalanceRedux";


const mapStateToProps = (state) => ({
    name: getName(state),
    surname: getSurname(state),
    accountBankNumber: getAccountBankNumber(state)
})

export default connect(mapStateToProps,null)(Profile);