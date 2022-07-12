import { connect } from "react-redux";
import BtnSerwerList from '../BtnSerwerList/BtnSerwerList';
import { changeIsOpen, getIsOpen } from "../redux/ListUIStateRedux";

const mapStateToProps = (state) => ({
    isOpen: getIsOpen(state)
})

const mapDisptachToProps = dispatch => ({
    changeIsOpen: (value) => dispatch(changeIsOpen(value)),
})

export default connect(mapStateToProps, mapDisptachToProps )(BtnSerwerList);