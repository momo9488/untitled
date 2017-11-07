import React,{Component} from 'react';
import actions from '../Account'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import {addTodo} from "./actions";
import * as action from "./actions"
import {addTodos} from "./actions";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {withRouter} from 'react-router-dom'
import {History} from 'react-router-redux'
import {Link} from 'react-router-dom'
import Counter from '../Count/view'
import Loadable from 'react-loadable'
import Loading from '../function/Loading'
import fakeDelay from '../function/fakeDelay'
// import example from '../example'
// import home from '../Home'
class Account extends Component{

    constructor(props){
        super(props)
        this.state={
            page:2,
            mixins:[History],
            showComponent:false,
            username:'',
            time:'',
            result:''
        }

    }
    componentDidMount (){
        this.props.addTodos()
        console.log(this.props.history)
    }
     componentWillReceiveProps(nextProps){
        console.log(nextProps.location)
         console.log(this.props.location)
     }
     change(){
        var p =new Promise(function (resolve,reject) {
            setTimeout(function () {
                var num=Math.ceil(Math.random()*10);
                if(num<5){
                    resolve(num);//代表成功的时候
                }else {
                    reject('数字太大了'+num);//代表失败的时候
                }
            },2000);
        });
         ///上面的then和这里的catch是可以对失败进行返回。但是catch还可以当代码运行错误时运行
         return p.then(function (num) {
             console.log(num);
         })
             .catch(function (reason) {
                 console.log(reason)
             })
     }
     timeOut(){
         var p = new Promise(function (resolve,reject) {
             setTimeout(function () {
                 reject('请求超时');
             },5000);
         });
         return p;
     }
     return=()=>{
         this.props.history.goBack();

     }
     focus(){
         this.textInput.focus();
     }
     loadImageAsync(){
         var url="../img/timg.jpg";
         console.log(url)
         return new Promise(function(resolve, reject) {
             const image = new Image();
             image.onload = function() {
                 resolve(image);
             };
             image.onerror = function() {
                 reject(new Error('Could not load image at ' + url));
                 console.log(reject)
             };
             image.src = url;
         });
     }
     onclick(){
         if(!this.state.showComponent){
             this.setState({
                 showComponent:true
             })
         }
         else {
             this.setState({
                 showComponent:false
             })
         }
         console.log("1")
     }
     //用箭头，就能够把this绑定到当前的this了
    onMouseOver=()=>{
        LoadableExample.preload();
        console.log("2")
     }
    onChangeUserName = (e) => {
        this.setState({ username: e.target.value });
    }
    session=()=>{
        var time =new Date().getTime();
        this.setState({
            time:time
        })
        window.localStorage.setItem(this.state.time,this.state.username);
        var value=window.localStorage.getItem(this.state.time)
        var length=window.localStorage.length
        console.log(length)
        for(var i=0;i<window.localStorage.length;i++){
            var key=localStorage.key(i);
            var value=localStorage.getItem(key);
            this.setState({
                result:this.state.result+=value
            })
            console.log(value)
        }
    }
    render(){
        const location ={
            pathname:'/app/project',
            state:{fromDashboard:true}
        };
        const { username } = this.state;

        {if(window.localStorage){
            console.log('支持')
        }
        else {
            console.log('不支持')
        }}
            return(
            <div>
                <button onClick={this.return}>返回之前的路径</button>
                <button onClick={this.change}>promise</button>
                <div>当前路径:{location.pathname}</div>
                <button onClick={this.return}>返回</button>
                <Link to="/app">link</Link>
                <input type="text"
                ref={(input)=>{this.textInput=input}}/>
                <input type="button"
                       value="获得焦点"
                onClick={this.focus.bind(this)}/>
                <CustomTextInput
                    inputRef={el => this.inputElement = el}
                />
                <button onClick={this.loadImageAsync.bind(this)}>异步加载图片</button>
                ///
                <button onClick={this.onclick.bind(this)} onMouseOver={this.onMouseOver}>以组件为中心分隔代码</button>
                {this.state.showComponent && <LoadableExample/>}
                ///存储的数据是会进行覆盖的
                <Input
                    placeholder="Enter your userName"
                    prefix={<Icon type="user" />}
                    value={username}
                    onChange={this.onChangeUserName}
                    ref={node => this.userNameInput = node}
                />
                <button onClick={()=>{window.sessionStorage.setItem('session',username)}}>单个的seesion+</button>
                {sessionStorage.getItem('session')}
                <button onClick={()=>window.localStorage.setItem('local',username)}>单个的local+</button>
                {localStorage.getItem('local')}
                <button onClick={sessionStorage.clear()}>清空local</button>
                <p>当我们存储的数据是不覆盖的</p>
                <button onClick={this.session}>多个的location</button>
                {this.state.result}
            </div>
        );
    }
}
Account = Form.create({})(Account);

// {console.log(store.getState())}//这样是取不到值的
///state是一个对象集
///将state映射到props里面去
const mapStateToProps =(state) => {
    const account = state.account;
    console.log(account)
    return {
        add:account.value
    }
}
const mapDispatchToProps = (dispatch) => ({
    addTodos: () => {
        dispatch( addTodos());
    }
});
//mapStateToProps和mapDispatchToProps里面的方法就可以传入Account里面去
export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Account))

function CustomTextInput(props){
    return(
    <div>
        <input ref={props.inputRef}/>
    </div>
    )
}
//被Loabable构建的会开放一个预加载
//通过import() 并使用 React Loadable可以实现代码自动分隔
let LoadableExample=Loadable( {
    loader:()=>fakeDelay(400).then(() => import('../example').then({webpackChunkName:'example'})),//webpack也会把它分开打包到build中
    delay:200,
    loading:Loading
    // serverSideRequirePath: path.resolve(__dirname, '../Count/view')
});
