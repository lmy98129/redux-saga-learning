import ActionTypes from '../ActionTypes';
const fetch = require('whatwg-fetch').fetch;

export default class UserCommand {
    // static addUser(userInfo){
    //     return (dispatch) => {
    //         fetch(`https://api.github.com/users/${userInfo.userName}`)
    //           .then(res => res.json())
    //           .then(res => {
    //             dispatch({ type: ActionTypes.USER_ADD_IN, userInfo: { userName: res.name } });
    //             return res;
    //           })
    //           .then(res => dispatch({ type: ActionTypes.USER_ADD_SUCCESS, userInfo: { userName: res.name } }));
    //     }
    // }
}