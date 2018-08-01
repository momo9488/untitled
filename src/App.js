import React, { Component,getComponent } from 'react';
import './components/shard/App.css';
import 'antd/dist/antd.css';
import {combineReducers} from 'redux'
import {BrowserRouter as Router ,Route,Switch,Redirect } from 'react-router-dom';
// import {getComponent} from 'react-router'
import Bundle from "./components/function/Bundle";
import Container from "./components/shard/Container";
import Transition from './components/Transition/view'
import ReactMotion from './components/reactMotion/view'
import {BrowerRouter} from 'react-router-dom'
import {view as Weather} from './components/Weather/index'
import axiosView from './components/axios/axiosView'
import store from './store';
import navExample from './components/nav/view'
import Topics from './components/nav/match'
import Background from './components/background/view'
import loginForm from './components/loginForm/view'

///异步加载React 组件
///文档的换成getComponent不行
//最下面的''引号里面是打包的名字
//这个4以上的路由加载写法
const Account =(props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
            cb(require("./components/Account"));
        },'Account');
    }}>
        {(Account) => <Account {...props}/>}
</Bundle>
)

const Project =(props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
            cb(require('./components/Project'));
        },'project');
    }}>
        {(Project) => <Project {...props}/>}
    </Bundle>
)
const Counter = (props) => (
    <Bundle load={(cb) =>{
        require.ensure([], require=>{
            const {page, reducer, stateKey, initState} = require('./Page/CounterPage');
            initState().then((result) => {
                const state = store.getState();
                store.reset(combineReducers({
                    ...store._reducers,
                    count: reducer
                }), {
                    ...state,
                    [stateKey]: result
                });
                cb(page)
                // cb(require('./Page/CounterPage'));
            });
        }, 'counter');
        }}>
    </Bundle>
)
class App extends Component {
  render() {
    return (
        <div>
            <div>
              <Container>
                  <Switch>
                      <Route exact path="/App" component={Project}/>
                      <Route path="/App/account" component={Account}/>
                      <Route path="/App/Count" component={Counter}/>
                      <Route path="/App/transition" component={Transition}/>
                      <Route path="/App/reactMotion" component={ReactMotion}/>
                      <Route path="/App/weather" component={Weather}/>
                      <Route path="/App/axiox" component={axiosView}/>
                      <Route path="/App/nav" component={navExample}/>
                      <Route path="/App/topics" component={Topics}/>
                      <Route path="/App/background" component={Background}/>
                      <Route path="/App/loginForm" component={loginForm}/>
                  </Switch>
              </Container>
            </div>
        </div>
    );
  }
}
export default App;
