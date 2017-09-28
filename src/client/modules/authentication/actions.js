

import actionTypes from "./action-types";

export default {
    login: ({username, password}) => ({type: actionTypes.LOGIN, username, password})
};