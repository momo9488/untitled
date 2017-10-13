import {routerReducer} from 'react-router-redux'
import {createStore, combineReducers, compose,  applyMiddleware} from 'redux';
// import reducer from './components/Account/reducer'
import { reducer as accountReducer } from './components/Account/index'
import {reducer as countReducer} from './components/Count'
import {reducer as weatherReducer} from './components/Weather'
import resetEnhancer from './middleWare/reset'
//**************/
const win = window;
// if (process.env.NODE_ENV !== 'production') {
//     win.Perf = Perf ;
// }
//**************/
const originalReducer={
    routing : routerReducer,
    account : accountReducer,
    count : countReducer,
    weather : weatherReducer
}
//将所有的reducer都传进去
const reducer =combineReducers(originalReducer);
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