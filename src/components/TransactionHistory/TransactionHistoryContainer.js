import { connect } from "react-redux";
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { getTransactionHistory } from "../redux/TransactionHistoryRedux";

const mapStateToProps = (state) => ({
    allTransaction: getTransactionHistory(state)
})

export default connect(mapStateToProps,null)(TransactionHistory);