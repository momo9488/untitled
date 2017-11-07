import React,{Component} from 'react';
import {decrement, increment,ax} from "./action";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
function Counter({onIncrement,onDecrement,value}){
    return(
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <span>Count:{value}</span>
        </div>
    )
}
export const stateKey = 'count'
const mapStateToProps =(state) => {
     console.log(state.count)
     const count =state.count;
     console.log(count)
    return {
        value:state.count[stateKey]||0
    }
};
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => {
        dispatch( increment());
    },
    onDecrement: () => {
        dispatch(decrement());
    }
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Counter));