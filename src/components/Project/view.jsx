import React ,{Component} from 'react'
import {Modal,Row,Col,Card} from 'antd'
// import "build/static/media/home.ef32a948.less"
// import "./style/home.less"
import QueueAnim from 'rc-queue-anim'
import "./style/view.css"
class ProjectChild extends Component{
    constructor(props){
        super(props)
        this.state ={
            time:"跨域请求服务器中的数据"
        }
    }
    componentWillMount(){
        ///因为这个涉及到跨域请求，所以返回404
        // fetch("api/common/getdateinfo",{
        //
        // }).then(response =>{
        //     if(response.statue==200){
        //         response.json().then(data=>{
        //             this.setState({
        //                 time:data
        //             })
        //         })
        //     }
        //     else {
        //         console.log(response.status)
        //     }
        // })
    }
    model(){
        Modal.error({
            title:'model',
            okText:"OK",
            content: (
                <div>
                    <p>用户名或密码错误,请重新输入</p>
                </div>
            )
        });
    }

    render (){
        return(
            <div>
                <p>//////////////////</p>

                <p>time:{this.state.time}</p>
                <button onClick={this.model}>点击modal</button>
                <Row>
                    <Col span={5}>
                        <Card className="lists">
                            <div className="ant-card-cover"></div>
                            <div className="details">
                                <h5>我的项目</h5>
                                <h6>-显示我的项目列表-</h6>
                            </div>
                            我的项目
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Card className="lists">
                            <div className="ant-card-cover"></div>
                            <div className="details">
                                <h5>我的项目</h5>
                                <h6>-显示我的项目列表-</h6>
                            </div>
                            我的项目
                        </Card>
                    </Col>
                </Row>
                <div className="parent">
                    <div className="test"></div>
                </div>
                <QueueAnim>
                    <div key="1">1</div>
                    <div key="2">2</div>
                    <div key="3">3</div>
                </QueueAnim>
                <QueueAnim type="scaleX" duration={[600,0]} >
                    <div key="4">
                        <Card  className= "audited"  noHovering={true}
                               title={
                                   <div>
                                       <div className="project-name"><span>项目名称:</span><b></b> </div>
                                   </div>}
                        >
                            <ul className="info">
                                <li><b>ID:</b><span></span></li>
                                <li><b>负责人:</b><span> item.Master }</span></li>
                                <li><b>联系人:</b><span></span></li>
                                <li> <b>联系方式:</b><span></span></li>
                                <li> <b>项目地址:</b><span></span></li>
                                <li><b>设备数量:</b><span></span></li>
                            </ul>
                            <div className="operate">
                                <Row type="flex">
                                    <Col span={12}>
                                        <div className="import">

                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="detail">

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </div>
                </QueueAnim>
            </div>
        );
    }

}
export default ProjectChild;