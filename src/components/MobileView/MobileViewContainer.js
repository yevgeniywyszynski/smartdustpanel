import { connect } from "react-redux";
import MobileView from '../MobileView/MobileView';
import { getDeviceById } from "../redux/DevicesListRedux";

const mapStateToProps = (state) => ({
    getDeviceById:(id) => getDeviceById(state, id)
})

export default connect(mapStateToProps,null)(MobileView);