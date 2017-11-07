//redux-thunk 中间件来实现异步action 对象
function createThunkMiddleware( extraArgument ){
    return function(  {dispatch,getState}){
      return function(next){
          return function(action){
              //对传入的action对象进行处理
              if(typeof action === "function"){
                  return action(dispatch,getState,extraArgument)
              }
              return next(action)//让下一个中间件继续处理action
          }
      }
    }
}

const thunk = createThunkMiddleware();
export default thunk ;