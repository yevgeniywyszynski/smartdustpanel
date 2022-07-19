import { connect } from "react-redux";
import Panel from '../Panel/Panel';
import { changeIsOpen } from "../redux/ListUIStateRedux";

const mapDisptachToProps = dispatch => ({
    changeIsOpen: (value) => dispatch(changeIsOpen(value)),
})


export default connect(null, mapDisptachToProps )(Panel);