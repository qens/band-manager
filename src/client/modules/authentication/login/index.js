import {bindActionCreators} from 'redux';
import actions from "../actions";
import Login from "./login";
import {connect} from "react-redux";

const mapStateToProps = state => {
    const username = state.username;
    const password = state.password;

    return {username, password};
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: bindActionCreators(({username, password}) => actions.login({username, password}), dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);