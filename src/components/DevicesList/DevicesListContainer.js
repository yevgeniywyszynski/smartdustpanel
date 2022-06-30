import { connect } from "react-redux";
import DevicesList from '../DevicesList/DevicesList';
import { getAllDevices} from "../redux/DevicesListRedux";

const mapStateToProps = (state) => ({
    allDevices: getAllDevices(state)
})

export default connect(mapStateToProps,null)(DevicesList);