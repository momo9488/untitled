import React,{Component} from 'react';
import {decrement, increment} from "./action";
import {connect} from 'react-redux';
 class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 2

        }
    }
    render(){
        return(
            <div>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
                <span>counter:{this.state.value}</span>

            </div>
        );
    }
}

export const stateKey = 'counter'
const mapStateToProps =(state) => {
     console.log(state)
     return{
         value: 0 || state[stateKey]
     }
};
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => {
        dispatch( increment());
        console.log("1")
    },
    onDecrement: () =>{
        dispatch(decrement());
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(Count);