import React,{Component} from 'react';
import actions from '../Account'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import {addTodo} from "./actions";
import * as action from "./actions"
import {addTodos} from "./actions";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom'
import Perf from 'react-addons-perf'
const FormItem = Form.Item;



 class Account extends Component{

    constructor(props){
        super(props)
        this.state={
            page:2

        }
        // console.log()
console.log(this.props)
    }
    componentDidMount (){
        this.props.addTodos()
        // console.log(addTodos.dispatch())
        // this.props.pro()
    }
     // paginationChange(page){
     //     {console.log(page)}
     // }
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
        ///下面的就是回掉函数的写法
        // return p.then(function (num) {
        //     //成功的时候执行
        //     console.log(num);
        //     // return 'zhih'
        // },
        //     function (reason,num) {
        //     //失败的时候执行
        //         console.log(reason);
        //         console.log(num);
        //     }
        // )
         ///上面的then和这里的catch是可以对失败进行返回。但是catch还可以当代码运行错误时运行
         return p.then(function (num) {
             console.log(num);
         })
             .catch(function (reason) {
                 console.log(reason)
             })
     }
     //
      runAsync1(){
         var p1 = new Promise(function(resolve, reject){
             //做一些异步操作
             setTimeout(function(){
                 console.log('异步任务1执行完成');
                 resolve('随便什么数据1');
             }, 1000);
         });
         return p1;
     }
      runAsync2(){
         var p1 = new Promise(function(resolve, reject){
             //做一些异步操作
             setTimeout(function(){
                 console.log('异步任务2执行完成');
                 resolve('随便什么数据2');
             }, 2000);
         });
         return p1;
     }
      runAsync3(){
         var p1= new Promise(function(resolve, reject){
             //做一些异步操作
             setTimeout(function(){
                 console.log('异步任务3执行完成');
                 resolve('随便什么数据3');
             }, 2000);
         });
         return p1;
     }
     ////请求时间赛跑race.如果请求图片的时间超过5秒，就会执行timeout的catch
     requestImg(){
          var p =new Promise(function (resolve,reject) {
              var img = new Image();
              img.src ='../img/timg.jpg';
              img.onload = function () {
                  resolve(img);
              }
          });
         return p;
     }
     timeOut(){
         var p = new Promise(function (resolve,reject) {
             setTimeout(function () {
                 reject('请求超时');
             },5000);
         });
         return p;
     }
    render(){
        // const {onIncreaseClick} =this.props;
        const { getFieldDecorator} = this.props.form;
        // {console.log(getFieldsError)}
        // const usernameError = isFieldTouched("username") && getFieldError("username") ;
        return(
            <div>
                <div >这里面是account</div>
                <p>{this.props.add}</p>
                {/*<button onClick={onIncreaseClick}>ss</button>*/}
                {/*<p>{this.props.addTodos(2)}ss</p>*/}
                {/*<Pagination*/}
                    {/*// defaultCurrent={this.state.page}*/}
                    {/*total={500}*/}
                    {/*onChange = { this.paginationChange}*/}
                {/*/>*/}

                {/*<p>{this.props}</p>*/}
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
                <Link to="/App/list">
                    这很好
                </Link>
                <button onClick={this.change}>promise</button>
                {/*<button onClick={*/}
                    {/*Promise.all([this.runAsync1(),this.runAsync2(),this.runAsync3()])*/}
                        {/*.then(function (result) {*/}
                            {/*console.log(result);*/}
                        {/*})*/}
                {/*}>并行执行异步操作</button>*/}
                {/*{Promise.race([this.requestImg(),this.timeOut()])*/}
                    {/*.then(function (result) {*/}
                        {/*console.log(result)*/}
                    {/*})*/}
                    {/*.catch(function (reason) {*/}
                        {/*console.log(reason);*/}
                    {/*})}*/}
            </div>
        );
    }
}
Account = Form.create({})(Account);

// {console.log(store.getState())}//这样是取不到值的
///state是一个对象集
///将state映射到props里面去
const mapStateToProps =(state) => {
    const count = state;
    console.log(state)
    return {
        add:count
    }
}
const mapDispatchToProps = (dispatch) => ({
    addTodos: () => {
        dispatch( addTodos());
        console.log(addTodos())
    }
    // pro: () => {
    //   dispatch(pro(1,2));console.log(pro())
    // }
});
//mapStateToProps和mapDispatchToProps里面的方法就可以传入Account里面去
export default  connect(
    mapStateToProps,
    mapDispatchToProps
    // null
)(Account)

// coust Account =({add,addTodos}) =>{
//
// }


