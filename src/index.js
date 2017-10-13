import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router ,Route,Switch,Redirect } from 'react-router-dom';/////注意写法
import {getComponent} from 'react-router'
// import {StaticRouter} from 'react-router-dom'
// import {hashHistory} from 'react-router'
import NotFound from './components/NotFound'
import  Bundle from './components/function/Bundle'
import store from './store'
import {addTodo} from "./components/Account/actions";
import {Home} from './components/Home'
import LoginForm from "./components/LoginForm";
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


/////<Router>里面的就这么写就可以实现路由了
///<Redirect>是重定向。当路径是/的时候，就匹配路径到/App。
//<Provider>作用是保存store给子组件中的connect使用///connect会把State和dispatch转换成props传递给子组件

//Router代表整个路由器
//用Redux 来管理应用中的状态,所以把redux添加到应用去，store能够被所有访问到
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Redirect exact from='/' to='/App' />
                    <Route path="/login" component={LoginForm}/>
                    <Route exact path="/404" component={NotFound}>
                        {/*<Route path="/App" component={App}/>*/}
                    </Route>
                    {/*<Route path="/:u" component={App}/>*/}
                    <Route  path="/App" component={ App }/>
                    <Route path="/home" component={Home}/>
                    <Redirect from='*' to='/404' />

                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// {console.log(store.getState())}//这个是空的值
// store.dispatch({type:'ADD_TODO',text:'写作'});//通过这个就可以改变state的值
// store.dispatch(addTodo('sddd'));
// {console.log(store.getState())}//这个值就变了

// registerServiceWorker();
// Perf.stop();