import React from 'react'
import {Redirect} from 'react-router-dom'
import {Row,Col,Form,Icon,Input,Button} from 'antd'
import fakeAuth from './login/hasLogin'
// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//         this.isAuthenticated = true
//         setTimeout(cb, 100) // fake async
//     },
//     signout(cb) {
//         this.isAuthenticated = false
//         setTimeout(cb, 100)
//     }
// }
class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hasLogin : false,
            username:'',
        }
    }
    login = () => {
        fakeAuth.authenticate(()=>{
            this.setState({
                hasLogin :true
            })
            {console.log(this.state.hasLogin )}
        })
    }
    onChangeUserName = (e) => {
        this.setState({ username: e.target.value });
    }
    render(){
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { username } = this.state;

        if( !this.state.hasLogin ){
            return (
                <div className="containter">
                    <div>
                        <button onClick={this.login}>登陆</button>
                    </div>
                    <div className="bg"></div>
                    <div>
                        <Input
                            placeholder="Enter your userName"
                            value={username}
                            onChange={this.onChangeUserName}
                            ref={node => this.userNameInput = node}
                        />
                        <button onClick={()=>{window.sessionStorage.setItem('session',username)}}>单个的seesion+</button>
                        {sessionStorage.getItem('session')}
                        //如果是登陆的，使用这个
                        <button onClick={()=>window.localStorage.setItem('local',username)}>单个的local+</button>
                        {localStorage.getItem('local')}
                        <button onClick={sessionStorage.clear()}>清空local</button>
                        <p>当我们存储的数据是不覆盖的</p>
                    </div>
                </div>
            );
        }else{ {console.log(this.state.hasLogin )}
            return(
                <Redirect to={from}/>
            )
        }
    }
}
LoginForm = Form.create({
    onValuesChange:(props, values)=>{

    }
})(LoginForm);
export default LoginForm;
