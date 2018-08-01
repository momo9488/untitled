//完成替换reducer 和状态的功能
//用在store中
const RESET_ACTION_TYPE = '@@RESET';

const resetReducerCreator = (reducer, resetState) => (state, action) => {
    if (action.type === RESET_ACTION_TYPE) {  console.log("221")
        return resetState;
    } else {console.log("222")
        return reducer(state, action);
    }
};
///replaceReducer用于替换创建store的reducer
const reset = (createStore) => (reducer, preloadedState, enhancer) => {
    const store = createStore(reducer, preloadedState, enhancer);
    console.log("223")
    const reset = (resetReducer, resetState) => {
        const newReducer = resetReducerCreator(resetReducer, resetState);
        store.replaceReducer(newReducer);//先通过replaceReducer 函数替换store原有的reducer
        store.dispatch({type: RESET_ACTION_TYPE, state: resetState});//通过store 的dispatch 函数派发一个type 为RESET_ACTION_TYPE 的action 对象
    };

    return {
        ...store,
        reset
    };
};

export default reset;