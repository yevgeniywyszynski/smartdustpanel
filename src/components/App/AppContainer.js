import { connect } from "react-redux";
import App from '../App/App';
import { getInactiveSerwerList } from "../redux/SerwerListRedux";

const mapStateToProps = (state) => ({
    inactiveSerwer: getInactiveSerwerList(state)
})

export default connect(mapStateToProps, null )(App);