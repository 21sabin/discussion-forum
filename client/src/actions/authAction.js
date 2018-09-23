import {LOGIN_FAIL, LOGIN_REGQUEST, LOGIN_SUCCESS, LOADING} from './types';
import AuthService from './../service/authService';
const authService = new AuthService();

export const authAction=(payload)=>dispatch=>{
    console.log(payload,"payload")
    dispatch({ type:LOADING });
    authService.login(payload).then(result=>result.json()).then(data=>{
        dispatch({
            type:LOGIN_SUCCESS,
            payload:data
        })
    }).catch(error=>{
        dispatch({type:LOGIN_FAIL})
    })
}