import {DECREMENT, INCREMENT,AX} from "./actionType";
///数据只能通过这个来修改

export default (state={}, action) => {
    if(typeof state ==='undefined'){
        return [];
    }
    switch (action.type) {
        case 'INCREMENT':
            return state+1;
            // [
            //     ...state,
            //     {
            //         state:state.value+1
            //     }
            // ]
        case 'DECREMENT':
            return state-1;
            // [
            //     ...state,
            //     {
            //         state:state.value-1
            //     }
            // ]
        // case 'AX':
        //     return [
        //         ...state,
        //         {
        //             state:value+2
        //         }
        //     ]
        default:
            return state
    }
}