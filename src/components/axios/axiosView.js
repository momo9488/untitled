import React,{Component} from 'react'
import axios from 'axios'
export default class axiosView extends Component{
    constructor(props){
        super(props)
    }
    req(){
        axios.get('/data/sk/101010100.html')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        return(
            <div>
                <button onClick={this.state.req.bind(this)}>axios</button>
            </div>
        );
    }
}