import React from 'react';
import logo from './logo.svg';
import { DatePicker } from 'antd';
import './App.css';
export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to</h2>
                </div>
                <div className="App-intro">
                    <DatePicker/>
                </div>
            </div>
        );
    }
}