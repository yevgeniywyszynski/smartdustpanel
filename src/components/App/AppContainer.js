import { connect } from "react-redux";
import App from '../App/App';
import { getInactiveSerwerList } from "../redux/SerwerListRedux";
import { changeIsOpen } from "../redux/ListUIStateRedux";

const mapStateToProps = (state) => ({
    inactiveSerwer: getInactiveSerwerList(state)
});

const mapDisptachToProps = dispatch => ({
    changeIsOpen: (value) => dispatch(changeIsOpen(value)),
})


export default connect(mapStateToProps, mapDisptachToProps )(App);