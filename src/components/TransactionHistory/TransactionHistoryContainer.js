import { connect } from "react-redux";
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { getTransactionHistory} from "../redux/TransactionHistoryRedux";
import {getTypeCurrency } from '../redux/TransactionOptionsRedux';

const mapStateToProps = (state) => ({
    allTransaction: getTransactionHistory(state),
    typeCurrency: getTypeCurrency(state)
})

export default connect(mapStateToProps,null)(TransactionHistory);