import { connect } from "react-redux";
import SerwerList from '../SerwerList/SerwerList';
import { getAllSerwer } from "../redux/SerwerListRedux";
import { getSerwerListOpen } from "../redux/ListUIStateRedux";
import { showDevicesList } from "../redux/ListUIStateRedux";

const mapStateToProps = (state) => ({
    allSerwer: getAllSerwer(state),
    serwerListOpen: getSerwerListOpen(state)
})

const mapDisptachToProps = dispatch => ({
    showDevicesList: (value) => dispatch(showDevicesList(value)),
})


export default connect(mapStateToProps,mapDisptachToProps)(SerwerList);