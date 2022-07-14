import { connect } from "react-redux";
import AddDevices from './AddDevice';
import { addDevice } from '../redux/DevicesListRedux';

const mapDisptachToProps = (dispatch) => ({
    addStoreDevice: (device) => dispatch(addDevice(device))
})

export default connect(null,mapDisptachToProps)(AddDevices);