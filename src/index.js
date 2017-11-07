import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import {BrowserRouter ,Route,Switch,Redirect,HashRouter } from 'react-router-dom';/////注意写法
import {getComponent} from 'react-router'
import NotFound from './components/NotFound'
import  Bundle from './components/function/Bundle'
import store from './store'
import LoginForm from "./components/LoginForm";
// import {createHashHistory as history} from 'history/createHashHistory';
import historys from './components/history/history'
import {AuthButton} from './components/login/AuthButton'
import {PrivateRoute} from './components/login/PrivateRoute'
import {Link} from 'react-router-dom'
// import Home from './components/Home'
// const store =createStore(reducer);
// import Perf from 'react-addons-perf';
// Perf.start();
//webpack 使用require.ensure()进行代码拆分。
//require.ensure()实现按需加载
const App = (props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
            cb(require('./App'));
            //console.log(props)
        },'app');
    }}>
        {(App) => <App {...props}/>}
    </Bundle>
)
const Home = (props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
            cb(require('./components/Home'));
            //console.log(props)
        },'home');
    }}>
        {(App) => <App {...props}/>}
    </Bundle>
)
// const Hom =withRouter(
//     React.createClass({
//         componentDidMount(){
//             this.props.router.setRouteLeaveHook(
//                 this.props.route,
//                 this.routerWillLeave
//             )
//         },
//         routerWillLeave(nextLocation){
//           if(!this.state.isSaved) {
//               return  '请确认离开';
//           }
//         },
//         render(){
//             return (
//                 <div>d</div>
//             )
//         }
//     })
// )

/////<Router>里面的就这么写就可以实现路由了
///<Redirect>是重定向。当路径是/的时候，就匹配路径到/App。
//<Provider>作用是保存store给子组件中的connect使用///connect会把State和dispatch转换成props传递给子组件

//Router代表整个路由器
//用Redux 来管理应用中的状态,所以把redux添加到应用去，store能够被所有访问到
// const history = syncHistoryWithStore(HashRouter, store);
{/*当路由运行到哪个页面的时候，this.props.children指的是对应的component*/}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthButton/>
                <Switch>
                    <Redirect exact from='/' to='/App' />
                    <Route path="/404" component={NotFound}/>
                    {/*<Route path="/App" component={ App }/>*/}
                    <Route path="/home" component={Home}/>
                    <Route path="/history" component={historys}/>
                    {/*<ul>*/}
                        {/*<li><Link to="protected"/></li>*/}
                    {/*</ul>*/}
                    <Route path="/login" component={LoginForm}/>
                    <PrivateRoute path="/App" component={App}/>
                    <Redirect from='*' to='/404' />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
//把history这一路径设置成私有的，也就是要经过登陆才能访问的地址

// {console.log(store.getState())}//这个是空的值
// store.dispatch({type:'ADD_TODO',text:'写作'});//通过这个就可以改变state的值
// store.dispatch(addTodo('sddd'));
// {console.log(store.getState())}//这个值就变了

// registerServiceWorker();
// Perf.stop();