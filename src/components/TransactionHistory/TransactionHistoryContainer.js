import { connect } from "react-redux";
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { getTransactionHistory, getTypeCurrency } from "../redux/TransactionHistoryRedux";

const mapStateToProps = (state) => ({
    allTransaction: getTransactionHistory(state),
    typeCurrency: getTypeCurrency(state)
})

export default connect(mapStateToProps,null)(TransactionHistory);