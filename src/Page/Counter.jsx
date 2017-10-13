import React,{Component} from 'react'
import {view as Count} from '../components/Count/index'
// export const Counter= () => {
//     return(
//         <div>
//             <div>counter:</div>
//             <Count caption="any"></Count>
//         </div>
//     );
// };
export default class Counter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div>counter:</div>
                <Count caption="any"/>
            </div>
        );
    }
}