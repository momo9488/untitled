import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import Menuslide from './shard/Menuslide'
import Account from '../components/Account/view'
import {Spin} from 'antd'
import { connect } from 'react-redux';
// import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import '../transition.css'

 class App extends Component {
    constructor(props){
        super(props);
        this.state={
            date:"",
            num:1
        };
        // this.propsChange=this.propsChange.bind(this);
    }
     loadImageAsync(url){
        //promise没有返回值
         new Promise(function (resolve,reject) {
             var image=new Image();
             image.onload=function () {
                 console.log("load");
                 resolve(image);
                 console.log(image);
             };
             image.onerror=function () {
                 console.log("error")
                 reject(new Error('count not'))
             }
             function init_Img() {
                 image.src=url;
             }
             setTimeout(init_Img,2000);
             // p=Promise.resolve(image);
             // console.log(p)
             return image;
         })
     }
    propsChange(){
        this.setState({
            num:this.state.num+1
        });
    }
    render() {
            return (
                <div>
                    {/*{console.log(this.loadImageAsync('http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'))}*/}
                    {/*{this.loadImageAsync().then(value=>{console.log(value)})}*/}
                    {/*<div>{this.loadImageAsync('http://img02.tooopen.com/images/20141231/sy_78327074576.jpg')}1</div>*/}
                    {/*<img src={this.state.image.src}/>*/}

                    {/*<ReactCssTransitionGroup transitionName="fade" transitionEnterTimeout= { 500} transitionLeaveTimeout={200}>*/}
                        {this.loadImageAsync('http://img02.tooopen.com/images/20141231/sy_78327074576.jpg')}
                        <div>
                            这里面显示次数：{this.state.num}
                            <button onClick={this.propsChange.bind(this)}>点击</button>
                            <Link to="/App/Project">
                               project
                            </Link>
                            <Spin spinning={true}></Spin>
                            <Account ></Account>
                        </div>
                        <Menuslide/>
                    {/*</ReactCssTransitionGroup>*/}
                </div>
            );
    }
}
const mapStateToProps = (state) =>{
    // return {
    //     hasLogin: state.login.hasLogin,
    //     isLoading: state.login.isLoading,
    //     status: state.login.status,
    // };
    console.log(state)
}
const mapDispatchToState = (dispatch) =>{
    // return({
        // onLoginin : () =>{
        //     dispatch( fakeLogin() )
        // },
        // onLoginReset :() =>{
        //     dispatch( loginReset() )
        // }
    // })
    console.log(dispatch)
}

export default connect( mapStateToProps, mapDispatchToState )( App ) ;

