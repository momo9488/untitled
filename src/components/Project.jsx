import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Button,Switch,Popover,Table} from 'antd';
import ProjectChild from '../components/Project/view'
import { Upload,message,Icon,Modal} from 'antd';
import {jquery,map} from "./Tools/baseTool"
//这样定义是一个对象
const userData={
    name:"你好",
    age:"2",
}
export default class Project extends Component {
    constructor(props){
        super(props);
        //Json的用法
        var stu = new Array();
        stu[0]="ss";
        function switchUpper(key, value) {
            return value.toString().toUpperCase();
        }
        console.log(stu,switchUpper)
        var st=JSON.stringify(userData);//转成字符串
        var pa=JSON.parse(st)//转成对象
        {console.log("转成字符串"+st)}
        {console.log("转成对象"+pa.name)}
        console.log("判断网络是否存在"+window.navigator.onLine);//判断网络是否存在
        navigator.geolocation.getCurrentPosition(function (pos) {
            {console.log(pos.coords.latitude)}
        })
        //
        this.state={
            fileList: [],
            value:[{'username':'li','age':23},{'username':'li','age':23}]
        };
        this.roomColumns =  [
            { title: '房间代码',dataIndex: 'Code',key: 'Code',className:"Code"},
            { title: '房间号', dataIndex: 'Name', key: 'Name',},
            { title: '业主姓名',dataIndex: 'ResidentName',key: 'ResidentName' },
            { title: '业主性别',dataIndex: 'Gender',key: 'Gender' },
            { title: '电话',dataIndex: 'ResidentPhone',key: 'ResidentPhone'},
            { title: '是否启用', dataIndex: 'Status', key: 'Status',render: ( text,record,index) =>{
                return (
                    <div>
                        <Switch checkedChildren={<Icon type="check" />}
                                unCheckedChildren={<Icon type="cross" />}
                                defaultChecked ={ !!Number( record.Status ) }
                                checked = { !!Number( record.Status) }
                                onChange = { ( checked ) => {
                                    this.props.SetRoomStatus( record.ID, Number( checked ),index );
                                }}>

                        </Switch>
                    </div>
                )
            }},
            {
                title: "成员", dataIndex: "customers", key: "customers", render: (text, record,index) => {
                console.log(record)
                console.log(text)
                console.log(index)
            }

            }
        ];
        this.data= [{
            Code: '1',
            Name: '胡彦斌',
            ResidentName: 32,
            Gender: '西湖区湖底公园1号',
            customers:"成员"
        }];
    }
    componentDidMount(){
        this.textInput.focus()
        jquery();
        // map();
    }
    return=()=>{
       {console.log(this.props)}
       this.props.history.goBack();////只用这条语句就可以实现返回上一级
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
    clearLocation = () => {
        localStorage.clear()
    }
    render(){
        {console.log(this.props)}
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
                <Button onClick={this.clearLocation}>清空location</Button>
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
                        <Link to="/App/account">Account</Link>
                    </Col>
                </Row>
                <ProjectChild data={this.state.value}></ProjectChild>
                <Table columns={this.roomColumns}
                       dataSource={this.data}
                       pagination={this.data.length > 10}/>
                <input
                    ref={(input) => { this.textInput = input; }} />
                <input/>
                <div id="world-map" style={{height:"300px"}}></div>
            </div>
        );
    }
}