import React, { Component,getComponent } from 'react';
import './components/shard/App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router ,Route,Switch,Redirect } from 'react-router-dom';
// import {getComponent} from 'react-router'
import Bundle from "./components/function/Bundle";
import Container from "./components/shard/Container";
import Transition from './components/Transition/view'
import ReactMotion from './components/reactMotion/view'
import {BrowerRouter} from 'react-router-dom'
import Weather from './components/Weather/viewRedux'
///异步加载React 组件
///会单独打包成.chunk的文件
///文档的换成getComponent不行
//最下面的''引号里面是打包的名字
const Account =(props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
            cb(require("./components/Account"));
        },'account');
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

const Counter =(props) =>(
    <Bundle  load={(cb) => {
        require.ensure([], require => {
            cb(require('./Page/Counter'));
        },'counter');
    }}>
        {(Project) => <Project {...props}/>}
    </Bundle>
)

class App extends Component {
  render() {
    return (
        <div>
            <div>
              <Container>
                  <Switch>
                      <Route exact path="/App" component={Account}></Route>
                      <Route path="/App/Project" component={Project}></Route>
                      <Route path="/App/Count" component={Counter}/>
                      <Route path="/App/transition" component={Transition}/>
                      <Route path="/App/reactMotion" component={ReactMotion}/>
                      <Route path="/App/weather" component={Weather}/>
                  </Switch>
              </Container>
            </div>
        </div>
    );
  }
}

export default App;
