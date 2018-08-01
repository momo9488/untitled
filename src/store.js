// import {routerReducer} from 'react-router-redux'
// import {createStore, combineReducers, compose,  applyMiddleware} from 'redux';
// // import reducer from './components/Account/reducer'
// import {reducer as accountReducer } from './components/Account/index'
// import {reducer as countReducer} from './components/Count'
// import {reducer as weatherReducer} from './components/Weather'
// import Perf from 'react-addons-perf'
// import thunkMiddleware from 'react-thunk'
// import promise from './middleWare/promiseMiddleWare'
// import resetEnhancer from './middleWare/reset'
// //**************/
// const win = window;
// win.Perf = Perf ;
// const middlewares = [thunkMiddleware];
// if (process.env.NODE_ENV !== 'production') {
//
//     middlewares.push(require('redux-immutable-state-invariant').default());
// }
//
// const originalReducer={
//     // routing : routerReducer,
//     account : accountReducer,
//     count : countReducer,
//     weather : weatherReducer
// }
// //将所有的reducer都传进去
// const reducer =combineReducers(originalReducer);
// const storeEnhancers = compose(
//     applyMiddleware(...middlewares),
//     // resetEnhancer,
//     (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );
// const initState={}
// ///创建唯一的store，并把reducer和初始数据传过去
// const store=createStore(reducer,initState,storeEnhancers)
// store._reducers=originalReducer;
// // {console.log(store)}
// export default store;


import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunk  from 'redux-thunk'
//这个thunk可以自己写
// import thunk from './middleWare/reactThunkMiddleWare'
// import promise from './middleWare/promiseMiddleWare'
import resetEnhancer from './middleWare/reset'
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import {reducer as accountReducer } from './components/Account/index'
import {reducer as countReducer} from './components/Count'
import {reducer as weatherReducer} from './components/Weather'
import {reducer as loginReducer} from './components/loginForm/index'
import Perf from 'react-addons-perf'

const win = window;
win.Perf = Perf

const reducer = combineReducers({
    routing : routerReducer,
    account : accountReducer,
    count : countReducer,
    weather : weatherReducer,
    loginState : loginReducer,
});
//现在只能用promise异步加载，thunk异步加载还不行
const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant').default());
}
//组合了两个store
const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    // resetEnhancer,//增强器
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
const store=createStore(reducer, {}, storeEnhancers);
export default store

