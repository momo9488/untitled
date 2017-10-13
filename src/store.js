import {routerReducer} from 'react-router-redux'
import {createStore, combineReducers, compose,  applyMiddleware} from 'redux';
import reducer from './components/Account/reducer'
import {reducer as accountReducer} from './components/Account/reducer'
import {reducer as countReducer} from './components/Count/reducer'
import resetEnhancer from './middleWare/reset'
//**************/
const win = window;
// if (process.env.NODE_ENV !== 'production') {
//     win.Perf = Perf ;
// }
//**************/
// const originalReducer={
//     routing : routerReducer,
//     account : accountReducer,
//     count : countReducer
// }
// const reducer =combineReducers(originalReducer);
// const storeEnhancer  = compose (
//     resetEnhancer,
//     applyMiddleware(...middlewares),
//     (win && win.devToolsExtensioon) ? win.devToolsExtension() : f => f
// );
///创建唯一的store，并把reducer和初始数据传过去
const store=createStore(reducer,[])
// store._reducers = originalReducer;
// {console.log(store)}
export default store;