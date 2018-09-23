import {LOGIN_FAIL, LOGIN_REGQUEST, LOGIN_SUCCESS, LOADING} from './../actions/types';

const initialState = {
    loading: false,
    loginSuccess: false,
    userdata:{}
}

export default (state = initialState, action) => {
    console.log("reducer called")
    switch (action.type) {
        case LOADING:
            return {
                ...initialState,
                loading: true
            }
            break;

        case LOGIN_SUCCESS:
            return {
                ...initialState,
                userdata:action.payload,
                loading: false,
                loginSuccess:true
            };
            break;
        case LOGIN_FAIL:
        return {
            ...initialState,
            loginSuccess:false
        }

        default:
            return initialState;

    }
}