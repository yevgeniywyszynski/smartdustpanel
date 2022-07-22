import { connect } from "react-redux";
import SerwerAddForm from '../SerwerAddForm/SerwerAddForm';
import { addSerwer } from "../redux/SerwerListRedux";

const mapDisptachToProps = (dispatch) => ({
    addStoreSerwer: (serwer) => dispatch(addSerwer(serwer))
})

export default connect(null,mapDisptachToProps)(SerwerAddForm);