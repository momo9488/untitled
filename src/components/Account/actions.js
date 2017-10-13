import {ADD_TODO,ADD_TODOS,ADD} from './actionType'
export const addTodo=(text)=> {
    return {
        type:ADD_TODO,
        text:text
    }
}

export const addTodos = (id) => {
    return {
        type:ADD_TODOS,
        id:id
    }
}
// export const pro = (value,error) => {
//     return {
//         promise : new Promise(function (resolve,reject) {
//             if(true){
//                 resolve(value);
//             }else{
//                 reject(error);
//             }
//         }),
//         type:ADD
//     }
// }