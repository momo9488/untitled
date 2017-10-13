import {DECREMENT, INCREMENT} from "./actionType";
///数据只能通过这个来修改
export default (state={value:0}, action) => {
    console.log(state)
    if(typeof state ==='undefined'){
        return [];
    }
    switch (action.type) {
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state
    }
}