import { connect } from "react-redux";
import AddSerwer from '../AddSerwer/AddSerwer';
import { addSerwer } from "../redux/SerwerListRedux";

const mapDisptachToProps = (dispatch) => ({
    addStoreSerwer: (serwer) => dispatch(addSerwer(serwer))
})

export default connect(null,mapDisptachToProps)(AddSerwer);