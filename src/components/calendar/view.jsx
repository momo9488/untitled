import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Upload,message,Icon,Modal} from 'antd';
import {Row,Col,Button,Switch,Popover,Table} from 'antd';
// import 'antd/dist/antd.css';

// import {jquery,map} from "./Tools/baseTool"
// import {TransitionGroup} from 'react-addons-css-transition-group'
//这样定义是一个对象
export default class calendar extends Component {

    render(){
        return(
            <div>
                <Button>
                    Click to Upload
                </Button>
                <Row>
                    <Col span={12}>
                        <p>这是project页面</p>
                        <Button onClick={this.return}>返回上一级</Button>
                    </Col>
                    <Col span={12}>
                        <Link to="/App/account">Account</Link>
                    </Col>
                </Row>
                <div id="world-map" style={{height:"300px"}}></div>
            </div>
        );
    }
}