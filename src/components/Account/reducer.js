import {ADD_TODO} from './actionType'
import {ADD_TODOS} from './actionType'
const initState={
    text:'1',
    count:2
}
//这里没有定义函数名
export default (state={initState,page:2},action)=>{
    console.log(action)
    if(typeof state ==='undefined'){
        return [];
    }
    switch (action.type){
        case 'ADD_TODO':
            return
            state.concat(action.text);
        case 'ADD_TODOS':
            return {
                ...state,
                page:action.page
            };
        default:
            return state
    }
}