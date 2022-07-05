import { connect } from "react-redux";
import MobileSettings from '../MobileSettings/MobileSettings';
import { removeDevice } from "../redux/DevicesListRedux";

const mapDisptachToProps = dispatch => ({
    removeDevice: (mobileId) => dispatch(removeDevice(mobileId))
})

export default connect(null, mapDisptachToProps )(MobileSettings);