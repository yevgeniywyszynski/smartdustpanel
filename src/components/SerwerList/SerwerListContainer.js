import { connect } from "react-redux";
import SerwerList from '../SerwerList/SerwerList';
import { getAllSerwer } from "../redux/SerwerListRedux";

const mapStateToProps = (state) => ({
    allSerwer: getAllSerwer(state)
})


export default connect(mapStateToProps,null)(SerwerList);