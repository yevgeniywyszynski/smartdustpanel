import { connect } from "react-redux";
import ModalError from '../ModalError/ModalError';
import { changeIsOpen } from "../redux/ListUIStateRedux";
import { getInactiveSerwerList } from "../redux/SerwerListRedux";

const mapStateToProps = (state) => ({
    inactiveSerwer: getInactiveSerwerList(state)
})
const mapDisptachToProps = dispatch => ({
    changeIsOpen: (value) => dispatch(changeIsOpen(value)),
})

export default connect(mapStateToProps, mapDisptachToProps )(ModalError);