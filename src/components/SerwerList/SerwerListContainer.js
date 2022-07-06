import { connect } from "react-redux";
import SerwerList from '../SerwerList/SerwerList';
import { getAllSerwer, addSerwer } from "../redux/SerwerListRedux";

const mapStateToProps = (state) => ({
    allSerwer: getAllSerwer(state)
})

const mapDisptachToProps = (dispatch) => ({
    addStoreSerwer: (serwer) => dispatch(addSerwer(serwer))
})

export default connect(mapStateToProps,mapDisptachToProps)(SerwerList);