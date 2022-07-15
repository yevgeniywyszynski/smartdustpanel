import { connect } from "react-redux";
import Login from '../Login/Login';
import { getSubmitted, changeSubmitted } from "../redux/isSubmittedRedux";

const mapStateToProps = (state) => ({
    isSubmitted: getSubmitted(state),
})

const mapDisptachToProps = dispatch => ({
    changeSubmitted: (value) => dispatch(changeSubmitted(value)),
})

export default connect(mapStateToProps,mapDisptachToProps)(Login);