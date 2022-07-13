import { connect } from "react-redux";
import DevicesList from '../DevicesList/DevicesList';
import { getAllDevices} from "../redux/DevicesListRedux";
import { getDevicesListOpen } from '../redux/ListUIStateRedux';
import {showMobileSettings} from '../redux/ListUIStateRedux';

const mapStateToProps = (state) => ({
    allDevices: getAllDevices(state),
    devicesListOpen: getDevicesListOpen(state)
})

const mapDisptachToProps = dispatch => ({
    showMobileSettings: (value) => dispatch(showMobileSettings(value)),
})

export default connect(mapStateToProps,mapDisptachToProps)(DevicesList);