import { connect } from "react-redux";
import Contracts from '../Contracts/Contracts';
import { getContracts } from "../redux/ContractsRedux";

const mapStateToProps = (state) => ({
    allContracts: getContracts(state)
})

export default connect(mapStateToProps,null)(Contracts);