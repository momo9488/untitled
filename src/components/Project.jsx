import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Button} from 'antd';
import ProjectChild from '../components/Project/view'
import { Upload,message,Icon,Modal} from 'antd';
// import {TransitionGroup} from 'react-addons-css-transition-group'
export default class Project extends Component {
    constructor(props){
        super(props);
        // {console.log(props)}
        // {console.log("2")}
        this.state={
            fileList: []
        }
    }
    return=()=>{
       this.props.history.goBack();////只用这条语句就可以实现返回上一级
        // {console.log(this.props)}
        // {console.log("1")}
    }
    handle=()=>{
        const {fileList} =this.props;
        const filedown=new FormData();
        // fileList.forEach((info)=>{
        //     filedown.append('infoFile',info);
        //     console.log(info);
        // });
        fetch('//jsonplaceholder.typicode.com/posts/',{
            method:"POST",
            body:filedown,
        }).then((response)=>{
            if(response.state===200){
                console.log("成功")
            }
        })
    }
    render(){

        const props = {
            name: 'info',
           // action: '//jsonplaceholder.typicode.com/posts/',
            multiple:false,
            headers: {
                authorization: 'authorization-text',
            },
            beforeUpload(info){
                console.log(info.type);
                this.setState({
                    fileList: [info],
                });
                // Modal.warn({
                //     title:"文件类型不对"
                // })
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
            remove(info){
                console.log(info)
            }
        };

        return(
            <div>

                    <Upload {...props}><Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                    </Upload>
                    <Button onClick={this.handle()}>上传文件</Button>
                    <Row>
                        <Col span={12}>
                            <p>这是project页面</p>
                            <Button onClick={this.return}>返回上一级</Button>
                        </Col>
                        <Col span={12}>
                            <Link to="/App">Account</Link>
                        </Col>
                    </Row>
                    <ProjectChild></ProjectChild>
            </div>
        );
    }
}