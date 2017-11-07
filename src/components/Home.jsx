import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
// import {setRouteLeaveHook} from 'react-router'
// import {Lifecycle} from 'react-dom'
import '../Page/style/home.less'
//在这里导入的图片需要使用绝对路径
import home from '../components/img/timg.jpg'

class Home extends Component {
    constructor(props){
        super(props);
    }
    timeout = (ms) => {
        new Promise((resolve,reject) => {
            setTimeout(resolve,ms,'done');
        });
    }
    componentWillMount(){
        // 可能版本的问题，找不到此引用
        // this.context.router.setRouteLeaveHook(
        //     this.props.route,
        //     this.routerWillLeave
        // )
    }
    // routerWillLeave=(nextLocation)=>{
    //         return '请确认'
    // }
    render() {
        return (
            <div>
                <div className="all">
                    <div id="containter">
                        <div className="bg">
                            <img src={home} alt="图片"/>
                        </div>
                        <div className="loginBox">
                            <div className="formBorder">
                                <div className="ee">
                                    <div>
                                        <span>mobe</span>
                                    </div>
                                    <div>
                                        <div className="loginForm">
                                            <input type="text" placeholder="请输入用户名"/>
                                            <input type="text" placeholder="请输入用户名"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home